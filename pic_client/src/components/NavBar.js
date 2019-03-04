import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">About</NavLink><br />
      <NavLink to="/programmers">Programmers</NavLink><br />
      <NavLink to="/resources">Resources</NavLink><br />
    </div>
  );
};

export default NavBar;
