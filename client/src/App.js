// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch('/users')
    .then(r => r.json())
    .then(console.log)
  }, [])
  
  return (
    <div className="App">
      {/* p */}
      <p>Hey Matt!</p>
    </div>
  );
}

export default App;
