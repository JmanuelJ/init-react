import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'

describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('debe de mostrar el componente por defecto', () => { 
        
        render(<MultipleCustomHooks />);
    
        expect(screen.getByText('Cargando'));
        expect(screen.getByText('Información de pokemon'));

        const nextButton = screen.getByRole('button',{name: 'siguiente'});
        expect(nextButton.disabled).toBeTruthy();
     })
 })