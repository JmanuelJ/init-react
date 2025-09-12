import { types } from '../../../src/auth'

describe('Pruebas en "types.JS"', () => {

    test('debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        });
    })
})