import './App.css';

import React from 'react';
import PDFCompressor from './components/PDFCompressor';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">PDF Compressor</h1>
        <PDFCompressor />
      </div>
    </div>
  );
}

export default App;
