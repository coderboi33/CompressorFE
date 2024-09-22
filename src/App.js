import './App.css';

import React from 'react';
import YouTubeDownloader from './components/YouTubeDownloader';
import PDFCompressor from './components/PDFCompressor';

function App() {
  return (
    <div>
      <h1>PDF compressor</h1>
      <PDFCompressor />
    </div>
  );
}

export default App;
