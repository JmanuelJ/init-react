

import { getHeroesById } from "./bases/08-imp-ext";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//         //console.log('2 segundos despues');
//         //resolve();
//         const heroe = getHeroesById(2);
//         console.log(heroe);

//         resolve(heroe);

//         //reject('No se puedo encontrar el heroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log(heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log('2 segundos despues');
      //resolve();
      const heroe = getHeroesById(id);

      if (heroe !== undefined) {
        resolve(heroe);  
      } else {
        reject('No se pudo encontrar el heroe');
      }
      //reject('No se puedo encontrar el heroe');
    }, 2000);
  });
};

// getHeroeByIdAsync(6)
// .then((heroe) => console.log('heroe', heroe))
// .catch((err) => console.warn(err));

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);