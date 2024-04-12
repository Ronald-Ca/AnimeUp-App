import { useMutation } from 'react-query';
import axios from 'axios';
import { useQuery } from 'react-query';

export const useCreateAnimeMutation = () => {
    return useMutation(
        async (data: Anime) => {
            const response = await axios.post('http://localhost:1818/anime/create', data);
            return response.data;
        }
    )
}

export const useQueryBestAnime = () => {
    return useQuery('bestAnime', async () => {
        const response = await axios.get('http://localhost:1818/anime/best');
        return response.data;
    })
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
