
import httpService from './http.service';


class userService {
    async login(user) {
        return httpService.apiRequest('post', 'user/login', user);
    }

    async logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        return httpService.apiRequest('post', 'user/register', user);
    }
    async getUserById(id) {
        return httpService.apiRequest('get', `user/${id}`);
    }
    async listAllCompanyUsers(companyId) {
        return httpService.apiRequest('get', `user/company/${companyId}`);
    }
    async updateUser(user) {
        return httpService.apiRequest('put', `user/${user._id}`, user);
    }

}

export default new userService();