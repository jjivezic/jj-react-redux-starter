import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LanguageSelector from "../language/languageSelector";


const Navbar = (props) => {
  const { t } = useTranslation();
  const STATE = useSelector(state => {
    console.log("STATE", state)
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">Navbar</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link" >{t('navbar.link.home')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="app" className="nav-link" >{t('navbar.link.dashboard')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="login" className="nav-link" >{t('navbar.link.login')}</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li> */}
        {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
      </ul>
      <ul className="">
        <div className="lng-link dash-navbar-mobile">
          <LanguageSelector />
        </div>
      </ul>
    </nav>)
}

export default Navbar;