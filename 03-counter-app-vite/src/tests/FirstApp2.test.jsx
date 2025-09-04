
import { getAllByTestId, render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp/>', () => { 
    const title    = 'Hola soy JuanMa';
    const subtitle = 'Soy un subtitulo'

    test('debe de hacer match con el snapshot', () => {
      const {container} = render( <FirstApp title={title}/>);

      expect(container).toMatchSnapshot();
    });

    test('debe mostrar el mensaje "Hola soy JuanMa"', () => { 
      
      render( <FirstApp title={title}/>);
      expect(screen.getByText(title)).toBeTruthy();
    });

    test('debe mostrar el titulo en un h1', () => { 

      render( <FirstApp title={title}/>);

      expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => { 
      
      render( 
        <FirstApp 
          title={title}
          subTitle={subtitle}
        />
      );

      expect(screen.getAllByText(subtitle)).toBeTruthy();
     })

 });