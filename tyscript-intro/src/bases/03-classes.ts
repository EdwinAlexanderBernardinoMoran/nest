export class Pokemon {

    // Forma 1

    // public id: number;
    // public name: string;

    // constructor(id: number, name: string){
    //     this.id = id;
    //     this.name = name;
    // }

    // Forma 2

    constructor(
        public id: number, public name: string
    ) {}

}

export const charmander = new Pokemon(1, 'Charmander')

// La clase permite crear instancias de la misma
// La interfaz solo anade reglas y condiciones
