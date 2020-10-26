
import httpService from './http.service';


class UserService {
    async login(user) {
        return httpService.apiRequest('post', '/trader/register', user).then(response => ({
            response: {
                email: "Jelena",
                token: "to79472hsf%#&hHFFOS"
            }
        }))
            .catch(error => ({ error }))

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