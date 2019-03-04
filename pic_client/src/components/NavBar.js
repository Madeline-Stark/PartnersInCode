import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">About</NavLink>
      <NavLink to="/programmers">Programmers</NavLink>
      <NavLink to="/resources">Resources</NavLink>
    </div>
  );
};

export default NavBar;
