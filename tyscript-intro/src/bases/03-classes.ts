import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
export class Pokemon {

    // Forma 1

    // public id: number;
    // public name: string;

    // constructor(id: number, name: string){
    //     this.id = id;
    //     this.name = name;
    // }

    // Forma 2

    get imageUrl(): string{
        return `https://pokemon.com/${ this.id }`;
    }

    constructor(
        public id: number,
        public name: string,
    ) {}

    public scream() {
        console.log(`${this.name.toUpperCase()} !!!`);
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves);

        return data.moves;
    }

}

export const charmander = new Pokemon(1, 'Charmander')

// La clase permite crear instancias de la misma
// La interfaz solo anade reglas y condiciones
// Los metodos publicos los puedo utilizar donde quiera
// Los metodo privados solo los puedo utilizar dentro de la clase

console.log(charmander.getMoves());

// charmander.scream()
// charmander.speak()

