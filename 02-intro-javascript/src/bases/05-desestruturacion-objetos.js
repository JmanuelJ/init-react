const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {
//     const {edad, clave, nombre} = usuario;

//     console.log(edad, clave, nombre);
    
// };

const retornaPersona = ({nombre, edad, rango = 'capitan'}) => {
    console.log(edad, nombre, rango);
    
};

retornaPersona(persona);