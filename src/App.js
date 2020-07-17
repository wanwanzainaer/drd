import React, { useState } from 'react';
import './App.css';
import Baord from './components/Board';

function App() {
  const [boardSize, setBoardSize] = useState(3);
  const handleChange = (e) => {
    //must set  check the  value must number
    setBoardSize(e.target.value);
  };
  return (
    <div>
      <input value={boardSize} onChange={handleChange} />
      <Baord boardSize={boardSize} />
    </div>
  );
}

export default App;
