import axios from "axios";

export class PokeApiFetchAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data: T = await response.json();

        return data;
    }
}
export class PokeApiAdapter {

    private readonly axios = axios;

    // Funcion generica
    async get<T>(url: string): Promise<T>
    {
        const { data } = await this.axios.get<T>(url);
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