
import httpService from './http.service';


class UserService {
    async login(user) {
        //return httpService.apiRequest('post', 'user/login', user);
        return {
            email:"Jelena",
            token:"to79472hsf%#&hHFFOS"
        }
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

export default new UserService();