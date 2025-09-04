import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas eb 02-template-string', () => {
    test('getSaludo debe retornar "Hola JuanMa"', () => { 
        const  name = 'JuanMa';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
     });
 });