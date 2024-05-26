import { useMutation } from 'react-query';
import axios from 'axios';

export const useLoginMutation = () => {
    return useMutation(
        async (data: { email: string; password: string }) => {
            const response = await axios.post('http://localhost:1818/user/authenticate', data);
            return response.data;
        },
        {
            onSuccess: (data) => {
                console.log('Login realizado com sucesso:', data)
                const { token } = data
                if (token) {
                    localStorage.setItem('authToken', token)
                }
            },
            onError: (error) => {
                console.error('Erro ao fazer login:', error)
            }
        }
    );
};