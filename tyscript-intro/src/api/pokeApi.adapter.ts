import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        console.log('con fetch');
        
        const data: T = await response.json();

        return data;
    }
}
export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    // Funcion generica
    async get<T>(url: string): Promise<T>
    {
        const { data } = await this.axios.get<T>(url);
        console.log('con axios');
        return data;
    }

    // async post(url: string, body: any)
    // {
    //     return 
    // }

    // async patch(url: string, body: any)
    // {
    //     return 
    // }

    // async delete(url: string)
    // {
    //     return 
    // }
}