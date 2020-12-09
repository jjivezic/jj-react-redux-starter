import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { MainWrapper } from './mainWrapper';
import { localStorageService } from '../_services/localStorage.service';


export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return localStorageService.isAuth() ?
        <MainWrapper>
          <Component {...props}  {...rest} />
        </MainWrapper>
        : <Redirect to='/' />
    }}
    />

  )
}