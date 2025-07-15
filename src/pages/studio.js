import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Blockly from 'blockly';

//Modules
import Toolbar from './modules/toolbar';
import Workspace from './modules/workspace';
import Compiler from './modules/compiler';

export default function Studio() {
  const [workspaceInstance, setWorkspaceInstance] = useState(null);
  const [studioId, setStudioId] = useState(null);
  const [initialBlocks, setInitialBlocks] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const initializeStudio = async () => {
      const db = getFirestore();

      if (!id) {
        const docRef = await addDoc(collection(db, 'studios'), {
          name: 'Untitled Studio',
          userId: auth.currentUser.uid,
          createdAt: Date.now(),
          blocksXml: '',
        });
        setStudioId(docRef.id);
        navigate(`/studio/${docRef.id}`, { replace: true });
      } else {
        const studioDoc = await getDoc(doc(db, 'studios', id));
        if (studioDoc.exists()) {
          setStudioId(id);
          setInitialBlocks(studioDoc.data().blocksXml || '');
        }
      }
    };

    initializeStudio();
  }, [id, auth.currentUser, navigate]);

  // Function to get current XML when saving
  const getCurrentXml = () => {
    if (workspaceInstance) {
      return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspaceInstance));
    }
    return '';
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
      }}
    >
      <Toolbar getCurrentXml={getCurrentXml} studioId={studioId} />
      <div className="core" style={{ display: 'flex', flex: 1, height: 'calc(100% - 4.5rem)' }}>
        <div style={{ flex: 8, height: '100%' }}>
          <Workspace
            initialWorkspaceXml={initialBlocks}
            onWorkspaceInstance={setWorkspaceInstance}
          />
        </div>
        <div style={{ flex: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Compiler workspace={workspaceInstance} />
        </div>
      </div>
    </div>
  );
}
