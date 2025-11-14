import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.type === 'AUTH_TOKEN') {
        console.log('Received auth token!');
        window.parent.postMessage({ type: 'CROSSWORD_READY' }, '*');
      }
    });
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🎯 Snappy Crossword</h1>
      <p>Standalone crossword app is live!</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Waiting for auth token from main app...
      </p>
    </div>
  );
}

export default App;
