import React from 'react';
import Chess from './Chees';

const Square = ({ odd, oddRow, circularPiece }) => {
  let color;

  if (oddRow) {
    color = 'black';
    if (odd) {
      color = 'white';
    }
  } else {
    color = 'white';
    if (odd) {
      color = 'black';
    }
  }
  const content = circularPiece ? <Chess color={circularPiece} /> : null;
  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: `${color}`,
  };

  return <button style={style}>{content}</button>;
};

export default Square;
