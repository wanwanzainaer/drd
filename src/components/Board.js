import React from 'react';
import Squares from './Squares';

const Baord = ({ boardSize }) => {
  const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '800px',
    height: '800px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`,
  };
  const squareArr = Array(boardSize * boardSize).fill(null);

  return (
    <>
      Board
      <div style={style}>
        <Squares squareArr={squareArr} />
      </div>
    </>
  );
};

export default Baord;
