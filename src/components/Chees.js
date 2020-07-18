import React, { useState } from 'react';

const Chees = ({ color }) => {
  const [chees, setChees] = useState({ color: color, checked: false });

  let divRadius = chees.checked ? '50%' : '';

  const divStyle = {
    backgroundColor: `${chees.color}`,
    width: `${divRadius}`,
    alignText: 'center',
  };

  const onRadioClick = () => {
    let color = '';
    if (chees.color === 'red' || chees.color === 'pink') {
      color = chees.color === 'red' ? 'pink' : 'red';
    } else if (chees.color === 'black' || chees.color === 'yellow') {
      color = chees.color === 'yellow' ? 'black' : 'yellow';
    }
    setChees((s) => ({ ...s, color, checked: !s.checked }));
  };
  return (
    <div style={divStyle}>
      <input type="radio" checked={chees.checked} onClick={onRadioClick} />
    </div>
  );
};
export default Chees;
