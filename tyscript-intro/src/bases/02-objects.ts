export const pokemonIds = [1, 20, 30, 24, 66];

// Manera rapida convertir un numero
pokemonIds.push(+'1')

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasur'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'charmander'
}

// console.log(bulbasaur);
// console.log(pokemonIds);


// Pokemon es un arreglo de pokemons que lucira la interfaz de pokemon
export const pokemons: Pokemon[] = [];
pokemons.push(charmander, bulbasaur);

console.log(pokemons);

