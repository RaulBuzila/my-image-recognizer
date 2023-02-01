import './App.css';
import ImageRecognizer from './components/ImageRecognizer';
import React from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Image recognizer
        </p>
      </header>
      <ImageRecognizer />
    </div>
  );
}

export default App;