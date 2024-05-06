import { useMutation } from 'react-query';
import axios from 'axios';
import { useQuery } from 'react-query';
import AnimeService from '../services/animes';

const anime = new AnimeService()

export const useCreateAnimeMutation = () => {
    return useMutation(
        async (data: Anime) => {
            const formData = new FormData()
            formData.append('title', data.title)
            formData.append('description', data.description)
            formData.append('image', data.image as any)
            formData.append('episodes', data.episodes.toString())
            formData.append('year', data.year.toString())
            formData.append('rating', data.rating.toString())
            formData.append('publicRating', data.publicRating.toString())
            formData.append('status', data.status)
            formData.append('trailer', data.trailer as any)
            formData.append('opinion', data.opinion)
            formData.append('favorite', data.favorite.toString())
            formData.append('following', data.following.toString())
            const response = await axios.post('http://localhost:1818/anime/create', formData)
            return response.data
        }
    )
}

export const useQueryBestAnime = () => {
    return useQuery('bestAnime', async () => {
        const response = await axios.get('http://localhost:1818/anime/best', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data
    })
}

export const useQueryAnime = () => {
    return useQuery('anime', () => anime.getAnimes())
}

type Anime = {
    id?: number;
    title: string;
    description: string;
    image: FileList | null;
    episodes: number;
    year: number;
    rating: number;
    publicRating: number;
    status: string;
    trailer: FileList | null;
    opinion: string;
    favorite: boolean;
    following: boolean;
}
