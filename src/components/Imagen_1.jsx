import imagen_1 from '../assets/img/imagen_1.jpg';
import PropTypes from 'prop-types';


export const Imagen_1 = ( {props}) => {
  return (
    <img src={imagen_1} alt="universo"
    className={props.className} />
  )
}

Imagen_1.propTypes ={
    className: PropTypes.string
}