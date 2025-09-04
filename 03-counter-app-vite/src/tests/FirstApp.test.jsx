
// describe('Pruebas en <FirstApp/>', () => { 

import { getAllByTestId, render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

//     test('Debe de hacer match con el snapshot', () => { 
//         const title = 'Hola soy JuanMa';
//         render(<FirstApp title={title}/>);
//      });
//  });

describe('Pruebas en <FirstApp/>', () => { 
    
    // test('Debe de hacer match con el snapshot', () => { 

    //     const title = 'Hola soy JuanMa';
    //     const {container} = render(<FirstApp title={title}/>);

    //     expect(container).toMatchSnapshot();

    //  });
     
     test('Dede de mostrar el titulo en un h1', () => { 
        const title = 'Hola soy JuanMa';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
    
        // expect(h1.innerHTML.trim()).toBe(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);
      });

      test('debe mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola soy JuanMa';
        const subTitle = 'Soy el subtitulo';
        const {getByText} = render(
        <FirstApp 
            title={title}
            subTitle={subTitle}
        />);

        expect(getByText(subTitle)).toBeTruthy();
       })
 });