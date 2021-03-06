import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userActions } from "../../_store/actions/user.actions";
import LanguageSelector from "../language/languageSelector";
import styles from './navbar.module.scss';

const Navbar = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const logout = () => {
    dispatch(userActions.logout());
  };
  console.log('STORE', store)
  return (
    <nav className={styles.wrapper}>
      <h3>JJ STARTER</h3>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.active} >{t('navbar.link.home')}</NavLink>
        </li>
        {store.auth.user && <li>
          <NavLink to="app" activeClassName={styles.active} >{t('navbar.link.dashboard')}</NavLink>
        </li>}
        {!store.auth.user && <li >
          <NavLink to="login" activeClassName={styles.active}>{t('navbar.link.login')}</NavLink>
        </li>}
        <li>
          {store.auth.user && <a href="#" onClick={logout}>Logout</a>}
        </li>
      </ul>
      <ul>
        <div className="lng-Link">
          <LanguageSelector />
        </div>
      </ul>
    </nav>)
}

export default Navbar;