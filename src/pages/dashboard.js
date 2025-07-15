import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import Toolbar from './modules/toolbar';
import './modules/styles/base.css';

export default function Dashboard() {
  const [studios, setStudios] = useState([]);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const loadStudios = async () => {
      const db = getFirestore();
      const studiosRef = collection(db, 'studios');
      const q = query(studiosRef, where('userId', '==', auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const studiosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudios(studiosData);
    };

    loadStudios();
  }, []);

  const createNewStudio = () => {
    navigate('/studio');
  };

  const handleDeleteStudio = async (e, studioId) => {
    e.stopPropagation(); // Prevent navigation when clicking delete
    if (window.confirm('Are you sure you want to delete this studio?')) {
      try {
        const db = getFirestore();
        await deleteDoc(doc(db, 'studios', studioId));
        setStudios(studios.filter((studio) => studio.id !== studioId));
      } catch (error) {
        console.error('Error deleting studio:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="toolbar" style={{ padding: '0 1.5rem' }}>
        <h1
          className="header"
          style={{ fontSize: '2.5rem', margin: '0.5rem 0', paddingLeft: '1rem' }}
        >
          RBlocks
        </h1>
        <div style={{ flex: 1 }}></div>
        <button className="base-button" onClick={handleLogout} style={{ margin: '0 1.5rem 0 0' }}>
          Logout
        </button>
      </div>
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          height: 'calc(100% - 4.5rem)' /* Subtract toolbar height */,
          background: 'var(--text-extra)',
          paddingTop: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            backgroundColor: 'var(--text-extra)',
            padding: '1.25rem 3rem',
            borderBottom: '1px solid var(--primary-p)',
            zIndex: 10,
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--primary-h)' }}>My Studios</h2>
          <div>
            <button
              className="base-button"
              onClick={() => setIsHelpModalOpen(true)}
              style={{
                margin: '0 1rem',
                fontSize: '1.1rem',
                height: '3.5rem',
              }}
            >
              Getting Started
            </button>
            <button
              className="base-button"
              onClick={createNewStudio}
              style={{
                margin: '0 1rem',
                fontSize: '1.1rem',
                height: '3.5rem',
                backgroundColor: 'var(--secondary-h)',
                borderTop: '2px solid var(--secondary-m)',
                borderLeft: '2px solid var(--secondary-m)',
              }}
            >
              Create a New Studio
            </button>
          </div>
        </div>

        <div className="studios-grid" style={{ padding: '2rem 3rem' }}>
          {studios.map((studio) => (
            <div
              key={studio.id}
              className="studio-card"
              onClick={() => navigate(`/studio/${studio.id}`)}
              style={{ padding: '2.5rem', transition: 'all 0.3s ease' }}
            >
              <button
                className="delete-studio-button"
                onClick={(e) => handleDeleteStudio(e, studio.id)}
                style={{ width: '35px', height: '35px', fontSize: '1.4rem' }}
              >
                ×
              </button>
              <h3 style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>
                {studio.name || 'Untitled Studio'}
              </h3>
              <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                Created: {new Date(studio.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Started Modal */}
      {isHelpModalOpen && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            style={{
              maxWidth: '650px',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '2rem',
              borderRadius: '8px',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                color: 'var(--primary-h)',
                marginTop: 0,
                marginBottom: '1.5rem',
              }}
            >
              Getting Started with RBlocks
            </h2>
            <div
              style={{
                textAlign: 'left',
                marginBottom: '1.5rem',
                fontSize: '1.1rem',
                lineHeight: '1.6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Basic Instructions:
              </h3>
              <ol style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Click "Create New Studio" to start a new project.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Drag blocks from the toolbox on the left into your workspace.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Connect blocks together to create R code sequences.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Use the output panel to see the results of your code.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Save your work regularly using the Save button.
                </li>
              </ol>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Working with Data:
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                The HELPrct dataset is available by default. You can visualize it using plot blocks
                or analyze it with statistical functions.
              </p>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Creating Statistical Analyses:
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                Use the inference blocks to perform bootstrap confidence intervals and hypothesis
                tests.
              </p>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--primary-l)',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                }}
              >
                Tips:
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  Hover over blocks to see tooltips with more information.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Right-click on blocks for additional options.
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  Use the zoom controls to adjust your view.
                </li>
              </ul>
            </div>
            <div className="modal-buttons" style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="base-button"
                onClick={() => setIsHelpModalOpen(false)}
                style={{
                  margin: '0',
                  fontSize: '1.1rem',
                  height: '3rem',
                  width: '10rem',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
