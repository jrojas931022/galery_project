import imagen_2 from '../assets/img/imagen_2.jpg';  
import PropTypes from 'prop-types';  

export const Imagen_2 = (className) => {  
    return (  
        <img src={imagen_2} alt="universo"  className={className} />  
    );  
}  

Imagen_2.propTypes = {  
    className: PropTypes.string  
};