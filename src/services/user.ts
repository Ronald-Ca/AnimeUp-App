import axios from 'axios';

export default class UserService {
    async UserLogin(email: string, password: string): Promise<any> {
        try {
            const response = await axios.post('http://localhost:1818/user/authenticate', { email, password });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}