
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//primer valor
const [p1] = personajes;
//Segundo valor
const [,p2] = personajes;
//n valor
//const [, , , ... n] = personajes;
console.log(p1);
console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// const useState = (valor) => {
//     return [valor, () => {console.log('Hola mundo');
//     }];
// }

// const [nombre, setNombre] = useState('Juan');

// console.log(nombre);

// setNombre();




