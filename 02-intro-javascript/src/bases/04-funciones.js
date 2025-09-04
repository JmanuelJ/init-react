
const saludar  = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola mundo';

console.log(saludar('Juan'));
console.log(saludar2('Juan'));
console.log(saludar3('Juan'));
console.log(saludar4());


// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         userName: 'El_Papi11502'
//     };
// };

const getUser = () => ( {
        uid: 'ABC123',
        userName: 'El_Papi11502'
    }); 

console.log(getUser());


// function getUserActivo (nombre) {
//     return {
//         uid: 'ABC123',
//         userName: nombre
//     };
// };

const getUserActivo = (nombre) => (
    {
        uid: 'ABC123',
        userName: nombre
    }
);

const usuarioActivo = getUserActivo('Juan');
console.log(usuarioActivo);

