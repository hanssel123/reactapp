import React, { useState, useEffect } from 'react';

const Comp2 = () => {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    console.log('El efecto se ejecuta en cada renderizado');

    return () => {
      console.log('Limpieza del efecto');
    };
  });

  useEffect(() => {
    console.log('El efecto se ejecuta solo cuando el contador cambia');

    if (contador === 5) {
      setMensaje('¡Contador alcanzó el valor de 5!');
    }

    return () => {
      console.log('Limpieza del efecto cuando el contador cambia');
    };
  }, [contador]);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <p>{mensaje}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default Comp2;

