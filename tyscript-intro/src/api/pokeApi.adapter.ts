import axios from "axios";

export class PokeApiAdapter {

    private readonly axios = axios;
    async get(url: string)
    {
        const { data } = await this.axios.get(url);
        return data;
    }

    async post(url: string, body: any)
    {
        return 
    }

    async patch(url: string, body: any)
    {
        return 
    }

    async delete(url: string)
    {
        return 
    }
}