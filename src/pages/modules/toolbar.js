import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, updateDoc, collection, addDoc, getDoc } from 'firebase/firestore';

//Style
import './styles/base.css';

export default function Toolbar({ getCurrentXml, studioId }) {
  const [studioName, setStudioName] = useState('Untitled Studio');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveConfirmation, setSaveConfirmation] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSave = async () => {
    if (!studioName.trim() || !studioId) return;

    try {
      const db = getFirestore();
      const studioRef = doc(db, 'studios', studioId);

      await updateDoc(studioRef, {
        name: studioName,
        blocksXml: getCurrentXml(),
        lastModified: Date.now(),
      });

      setSaveConfirmation(true);
      setTimeout(() => setSaveConfirmation(false), 2000);

      console.log('Studio saved successfully');
    } catch (error) {
      console.error('Error saving studio:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const loadStudioData = async () => {
      if (studioId) {
        const db = getFirestore();
        const studioDoc = await getDoc(doc(db, 'studios', studioId));
        if (studioDoc.exists()) {
          setStudioName(studioDoc.data().name);
        }
      }
    };

    loadStudioData();
  }, [studioId]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  const buttonStyle = {
    backgroundColor: 'var(--accent-h)',
    borderTop: '2px solid var(--accent-l)',
    borderLeft: '2px solid var(--accent-l)',
    borderRight: 'none',
    borderBottom: 'none',
    margin: 'auto 0.5rem',
  };

  return (
    <nav className="toolbar" style={{ padding: '0 1.5rem' }}>
      <div style={{ width: '100%', flex: 1, paddingLeft: '1rem' }}>
        <h1 className="header" style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>
          RBlocks
        </h1>
      </div>
      <div style={{ width: '100%', flex: 6, display: 'flex', alignItems: 'center' }}>
        <span style={{ margin: 'auto 1rem', color: 'white', fontSize: '1.2rem' }}>
          {studioName}
        </span>
        <button
          className="small-button"
          onClick={() => setIsModalOpen(true)}
          style={{ ...buttonStyle, margin: '0 0.8rem' }}
        >
          Change Studio Name
        </button>
        <button
          className="small-button"
          onClick={handleSave}
          style={{ ...buttonStyle, margin: '0 0.8rem' }}
          disabled={!studioName.trim()}
        >
          Save
        </button>
        {saveConfirmation && (
          <span
            style={{
              color: 'white',
              marginLeft: '15px',
              fontSize: '1rem',
            }}
          >
            Saved successfully!
          </span>
        )}

        {isModalOpen && (
          <div className="modal-overlay">
            <div
              className="modal-content"
              style={{
                padding: '2rem',
                borderRadius: '8px',
                maxWidth: '450px',
              }}
            >
              <h3
                style={{
                  fontSize: '1.6rem',
                  color: 'var(--primary-h)',
                  marginTop: 0,
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                }}
              >
                Rename Studio
              </h3>
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  placeholder="Enter studio name"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    fontSize: '1.2rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    marginBottom: '1.5rem',
                  }}
                />
                <div
                  className="modal-buttons"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                  }}
                >
                  <button
                    type="button"
                    className="small-button"
                    onClick={() => setIsModalOpen(false)}
                    style={{
                      margin: 0,
                      fontSize: '1rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--primary-m)',
                      borderTop: '2px solid var(--primary-l)',
                      borderLeft: '2px solid var(--primary-l)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 'auto',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="small-button"
                    style={{
                      margin: 0,
                      fontSize: '1rem',
                      padding: '0.5rem 1rem',
                      backgroundColor: 'var(--accent-h)',
                      borderTop: '2px solid var(--accent-l)',
                      borderLeft: '2px solid var(--accent-l)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 'auto',
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          width: '100%',
          flex: 3,
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '1.5rem',
        }}
      >
        <button
          className="small-button"
          onClick={() => navigate('/dashboard')}
          style={{ ...buttonStyle, margin: '0 0.8rem' }}
        >
          Exit
        </button>
        <button
          className="small-button"
          onClick={handleLogout}
          style={{ ...buttonStyle, margin: '0 0.8rem' }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
