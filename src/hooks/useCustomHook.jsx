import { useState, useEffect } from 'react';

const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Lógica adicional si es necesario
    // ...

    // Cleanup (opcional)
    return () => {
      // Acciones de limpieza si es necesario
      // ...
    };
  }, [initialValue]); // Dependencias opcionales

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  // return [value, updateValue];
  return initialValue.length;
};

export default useCustomHook;