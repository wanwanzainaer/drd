import React from 'react';

const Square = ({ odd, oddRow }) => {
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

  const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: `${color}`,
  };

  return <button style={style}></button>;
};

export default Square;
