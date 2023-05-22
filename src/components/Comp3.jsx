import React from 'react';
import { useLocation } from 'react-router-dom';

const Comp3 = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Información de ubicación</h2>
      <p>Pathname: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
};

export default Comp3;