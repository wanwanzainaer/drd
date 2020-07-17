import React from 'react';
import Square from './Square';

const Squares = ({ squareArr }) => {
  const size = Math.sqrt(squareArr.length);

  return (
    <>
      {squareArr.map((item, index) => {
        let oddRow = false;
        let num = index + 1;
        const whichRow = Math.ceil(num / size);
        if (size % 2) {
          if (whichRow % 1) {
            oddRow = true;
          }
        } else {
          if (whichRow % 2) {
            oddRow = true;
          }
        }
        return <Square key={index} odd={index % 2} oddRow={oddRow} />;
      })}
    </>
  );
};
export default Squares;
