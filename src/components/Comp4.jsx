import React from 'react';
import useCustomHook from '../hooks/useCustomHook';

const Comp4 = () => {
  const [value, updateValue] = useCustomHook('initial value');

  const handleClick = () => {
    updateValue('new value');
  };

  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>Value: {value}</p>
      <button onClick={handleClick}>Update Value</button>
    </div>
  );
};

export default Comp4;