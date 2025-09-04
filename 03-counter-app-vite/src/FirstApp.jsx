// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Juan '
// }

// const getSaludo = (message, title) => {
//     return message + title;
// }


// export const FirstApp = (props) => {
//   return (
//     <>
//     <h1> {getSaludo(newMessage.title, newMessage.message)} </h1>
//     <div>Soy un subtitulo</div>
//     </>
//   )
// }

// export const FirstApp = (props) => {
//   return (
//     <>
//     <h1> {props.title} </h1>
//     <div>Soy un subtitulo</div>
//     </>
//   )
// }

import Proptypes from 'prop-types';

//Desestructuracioón de props
export const FirstApp = ({
  title,
  subTitle = 'No hay subtitulo',
  name ='JuanMa'
}) => {
  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: Proptypes.string.isRequired,
  subTitle: Proptypes.string
}
