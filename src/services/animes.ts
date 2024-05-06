import axios from "axios";
import BaseService from "./auth";

export default class AnimeService extends BaseService {
    constructor() {
        super('/anime')
    }

    async getAnimes() {
        const data = await axios.get('http://localhost:1818/anime/get')
        return data.data.data
    }
}