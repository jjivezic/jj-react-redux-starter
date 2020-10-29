import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userActions } from "../../_store/actions/user.actions";
import LanguageSelector from "../language/languageSelector";


const Navbar = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const logout = () => {
    dispatch(userActions.logout());
  };
  console.log('User***********************',store )
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">Navbar</a>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link" >{t('navbar.link.home')}</NavLink>
        </li>
        {store.auth.user &&  <li className="nav-item">
          <NavLink to="app" className="nav-link" >{t('navbar.link.dashboard')}</NavLink>
        </li>}
        <li className="nav-item">
          <NavLink to="login" className="nav-link" >{t('navbar.link.login')}</NavLink>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li> */}
        <li className="nav-item">
        {store.auth.user && <a className="nav-link" href="#" onClick={logout}>Logout</a>}
      </li>
      </ul>
      <ul className="">
        <div className="lng-link dash-navbar-mobile">
          <LanguageSelector />
        </div>
      </ul>
    </nav>)
}

export default Navbar;