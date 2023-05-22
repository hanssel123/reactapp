import React, { useState } from 'react';

const Comp1 = () => {
  // Declara una variable de estado llamada 'contador' inicializada en 0
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador en 1 cuando se presione el botón
  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default Comp1;
