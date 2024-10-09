import './App.css';
import React, { useState } from 'react';
import PDFCompressor from './components/PDFCompressor';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Toggle Button at the Top */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Toggle Dark Mode
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">PDF Compressor</h1>
      <PDFCompressor />
    </div>
  );
}

export default App;
