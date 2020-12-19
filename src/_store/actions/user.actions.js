import { authConstants } from '../constants';
import UserService from '../../_services/user.service';
import { history } from '../../_utils';
import { localStorageService } from '../../_services/localStorage.service';


const login = (data) => {
  const request = () => { return { type: authConstants.LOGIN_REQUEST }; };
  const success = (user) => { return { type: authConstants.LOGIN_SUCCESS, user }; };
  const failure = (error) => { return { type: authConstants.LOGIN_FAILURE, error }; };

  return dispatch => {
    dispatch(request());
    return UserService.login(data)
      .then(
        user => {
          if (user) {
            dispatch(success(user));
            localStorageService.set('user', user);
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
  localStorageService.destroy('user');
  sessionStorage.clear();
  history.push('/');
  return { type: authConstants.LOGOUT };
};

export const userActions = {
  login,
  logout
};