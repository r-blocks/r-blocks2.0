import React from 'react';
import Blockly from 'blockly';
import './styles/base.css';

export default function Compiler({ workspace }) {
  const handleConvert = () => {
    if (workspace) {
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      const linked = 'https://rdrr.io/snippets/embed/?code=' + encodeURIComponent(code);
      const snippetElement = document.getElementById('snippet');
      if (snippetElement) {
        snippetElement.src = linked;
      }
    }
  };

  return (
    <div
      className="compiler"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
        padding: '0.5rem',
        justifyContent: 'flex-start',
      }}
    >
      <button
        onClick={handleConvert}
        className="convert-button"
        style={{
          padding: '10px 20px',
          margin: '0 0 10px 0',
          backgroundColor: '#4A90E2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Convert to R Code
      </button>

      <div style={{ flex: 1, height: 'calc(100% - 50px)' }}>
        <iframe
          id="snippet"
          width="100%"
          height="100%"
          src="https://rdrr.io/snippets/embed/?code=library(mosaic)"
          frameBorder="0"
          style={{ display: 'block' }}
        >
          Documentation Support: https://rdrr.io/snippets/embedding/
        </iframe>
      </div>
    </div>
  );
}
