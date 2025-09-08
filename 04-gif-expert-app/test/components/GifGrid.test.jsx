import { render, screen } from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    const category = 'One Piece';

    test('debe mostrar el loading inicialemente', () => {
         
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);

        expect(screen.getByText('Cargando...'));
        expect(screen.getAllByText(category));
     });
     
     test('debe de mostrar items cuando se cargan la imagens useFetchGifs', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'One Piece',
                url: 'https://localhost/luffy.jpg'
            },
            {
                id: 'DEF',
                title: 'Naruto',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading:false
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);
      });

 });