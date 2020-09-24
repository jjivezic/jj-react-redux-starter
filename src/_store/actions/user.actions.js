import { userConstants } from '../constants';
import UserService from '../../_services/user.service';
import { history } from '../../_utils';
import { sessionService } from '../../_sessionService/storage';

const login = (data) => {
  const request = () => { return { type: userConstants.LOGIN_REQUEST }; };
  const success = (user) => { return { type: userConstants.LOGIN_SUCCESS, user }; };
  const failure = (error) => { return { type: userConstants.LOGIN_FAILURE, error }; };

  return dispatch => {
    dispatch(request());
    return UserService.login(data)
      .then(
        user => {
          if (user) {
            dispatch(success(user));
            sessionService.set('user', JSON.stringify(user));
            history.push('/app');
            return user;
          }
        },
        error => {
          dispatch(failure(error));
        }
      );
  };
};

const logout = () => {
  sessionService.destroy('user');
  sessionStorage.clear();
  history.push('/');
  return { type: userConstants.LOGOUT };
};

export const userActions = {
  login,
  logout
};