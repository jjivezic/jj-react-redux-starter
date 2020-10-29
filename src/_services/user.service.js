
import httpService from './http.service';


class UserService {
    async login(user) {
        return httpService.apiRequest('post', 'trader/login', user).then(response => ({response})).catch(error => ({ error }))
    }

    async logout() {
        localStorage.removeItem('user');
    }

    // async register(user) {
    //     return httpService.apiRequest('post', 'user/register', user);
    // }
    // async getUserById(id) {
    //     return httpService.apiRequest('get', `user/${id}`);
    // }
    // async listAllCompanyUsers(companyId) {
    //     return httpService.apiRequest('get', `user/company/${companyId}`);
    // }
    // async updateUser(user) {
    //     return httpService.apiRequest('put', `user/${user._id}`, user);
    // }

}

export default new UserService();