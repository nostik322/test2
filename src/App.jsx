import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  const clearClipboard = async () => {
    try {
      await navigator.clipboard.writeText('');
      setStatus('Clipboard cleared successfully!');
      setTimeout(() => setStatus(''), 2000);
    } catch (err) {
      setStatus('Failed to clear clipboard. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Clipboard Manager</h1>
        <button
          onClick={clearClipboard}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Clear Clipboard
        </button>
        {status && (
          <p className="mt-4 text-center text-sm text-gray-600">{status}</p>
        )}
      </div>
    </div>
  );
}

export default App;