import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
 const STATE = useSelector(state => {
   console.log("STATE",state)
 });
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">Navbar</a>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="app" className="nav-link" >Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="login" className="nav-link" >Login</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li> */}
        {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
      </ul>
    </nav>)
}

export default Navbar;