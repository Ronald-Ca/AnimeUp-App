import { useMutation } from 'react-query';
import axios from 'axios';

export const useCreateAnimeMutation = () => {
    return useMutation(
        async (data: Anime) => {
            const response = await axios.post('http://localhost:1818/anime/create', data);
            return response.data;
        }
    )
}

type Anime = {
    id?: number;
    title: string;
    description: string;
    image: string;
    episodes: number;
    year: number;
    rating: number;
    publicRating: number;
    status: string;
    trailer: string;
    opinion: string;
}
