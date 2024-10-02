export const name:string = "Edwin Alexander"
export const age: number = 22;
export const isValid: boolean = true;

export const templateString = `Esto es un string 
multilinea que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${1 + 1}
numeros: ${age}
booleanos: ${isValid}`

console.log(templateString);

