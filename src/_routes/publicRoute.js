import React from 'react';
import { Route } from 'react-router-dom';
import { MainWrapper } from './mainWrapper';

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return (<MainWrapper >
        <Component {...props}  {...rest} />
      </MainWrapper >)
    }} />
  )
}