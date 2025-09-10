import { UserContext } from '../../src/09-useContext/context/UserContext'
import { HomePage } from '../../src/09-useContext/HomePage'

const { render, screen } = require('@testing-library/react')

describe('Pruebas en <HomePage />', () => { 
    const user = {
        id: 1,
        name: 'JuanMA'
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user : null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        
        expect(preTag.innerHTML).toBe('null');
     });

     test('debe de mostrar el componente con el usuario', () => { 
        
        render(
            <UserContext.Provider value={{user : user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
     });

 });