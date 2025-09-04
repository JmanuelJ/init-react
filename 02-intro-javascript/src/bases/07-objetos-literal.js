
const persona = {
    nombre: 'Juan',
    apellido: 'stark',
    edad: 29,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.323232,
        lng: 34.9233321
    }
};

const pesrona2 = {...persona};
pesrona2.nombre = 'Pedro';

console.log(persona);
console.log(pesrona2);





