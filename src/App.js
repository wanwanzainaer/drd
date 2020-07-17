import React, { useState } from 'react';
import './App.css';
import Baord from './components/Board';

function App() {
  const [boardSize, setBoardSize] = useState(3);
  return (
    <div>
      <input
        value={boardSize}
        onChange={(e) => {
          setBoardSize(e.target.value);
        }}
      />
      <Baord boardSize={boardSize} />
    </div>
  );
}

export default App;
