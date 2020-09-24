import React from 'react';
import {Redirect,Route } from 'react-router-dom';

import MainWrapper from './mainWrapper';
import { sessionService } from '../_sessionService/storage';


  export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} render={props => {
        return sessionService.isAuth() ?
          <MainWrapper>
            <Component {...props}  {...rest}/>
          </MainWrapper>
          : <Redirect to='/' />
        }}
      />
      
    )
  }