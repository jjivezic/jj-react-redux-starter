export const sessionService = {


  /**
   * Stores user json object ot local storage
   * @param user
   */
  create(user) {
    delete user.user.password;
    localStorage.setItem('user', JSON.stringify(user));
  },
  /**
   * Destroy user object from local storage and redirects to login
   */
  destroy() {
    localStorage.removeItem('user');
  },
  getUserId() {
    let data = localStorage.getItem('user');
    if (!data) return null;
    var user = JSON.parse(data);
    return (user) ? user.user._id : "";
  },
  getUser() {
    let data = localStorage.getItem('user');
    if (!data) return null;
    var user = JSON.parse(data);
    return (user && user.user) ? user.user : null;
  },
  updateUser(newData) {
    let data = localStorage.getItem('user');
    if (!data) return null;
    var user = JSON.parse(data);
    if (newData.email) user.user.email = newData.email;
    if (newData.firstName) user.user.firstName = newData.firstName;
    if (newData.lastName) user.user.lastName = newData.lastName;
    if (newData.token) user.token = newData.token;
    if (newData.refreshToken) user.refreshToken = newData.refreshToken;

    delete user.user.password;
    localStorage.setItem('user', JSON.stringify(user));
  },
  getSessionToken() {
    let data = localStorage.getItem('user');
    if (!data) return null;
    let session = JSON.parse(data);
    return (session && session.token) ? session.token : null;
  },
  getSessionRefreshToken() {
    let data = localStorage.getItem('user');
    if (!data) return null;
    let session = JSON.parse(data);
    return (session && session.refreshToken) ? session.refreshToken : null;
  },
  getUsername() {
    let data = localStorage.getItem('user');
    if (!data) return null;
    let session = JSON.parse(data);
    return (session && session.user) ? session.user.firstName + " " + session.user.lastName : null;
  },
  isAuth() {
    let data = localStorage.getItem('user');
    console.log('>>>>>>>>1isAuth',data)
    if (!data) {
      console.log('>>>>>>>>isAuth')
      return false;
    } else {
      var session = JSON.parse(data);
      return session.token
    }
  }
}