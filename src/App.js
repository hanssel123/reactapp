// import logo from './logo.svg';
// import './App.css';
// import Parrafo from './components/Parrafo';
// import './styles/Parrafo.css';
// import Comp1 from './components/Comp1';
// import Comp2 from './components/Comp2';
// import Comp3 from './components/Comp3';
// import Comp4 from './components/Comp4';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Parrafo text="My first text" style="negrita"></Parrafo>
//         <Parrafo text="My first white" style="red"></Parrafo>
//         <Comp1></Comp1>
//         <Comp2></Comp2>
//         <Comp3></Comp3>
//         <Comp4></Comp4>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import AddItem from './components/AddItem';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
};

export default App;

