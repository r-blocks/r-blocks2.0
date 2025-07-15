import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import './modules/styles/base.css';

export default function Auth() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: 'var(--primary-m)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60%',
        }}
      >
        <h1
          style={{
            color: 'var(--secondary-l)',
            fontSize: '4rem',
            fontFamily: 'Roboto Mono',
            fontWeight: 700,
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          RBlocks Studio
        </h1>
        <button
          className="base-button"
          onClick={signInWithGoogle}
          style={{
            marginTop: '2rem',
            backgroundColor: 'var(--secondary-h)',
            borderTop: '2px solid var(--secondary-m)',
            borderLeft: '2px solid var(--secondary-m)',
            borderRight: 'none',
            borderBottom: 'none',
            fontSize: '1.2rem',
            width: '16rem',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
