import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroById debe de retonar un héroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'});
     });

     test('getHeroById debe de retonar undefined si no existe', () => { 
        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
     });

     test('getHeroesByOwner de retornar un arreglo con los heroes de DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'}
        ]);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
      });

      test('getHeroesByOwner de retornar un arreglo con los heroes de Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));
      });
 });