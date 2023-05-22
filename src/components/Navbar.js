import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/inventory">Inventario</Link>
        </li> 
        <li>
          <button onClick={() => navigate('/contaduria')}>Contaduria</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
