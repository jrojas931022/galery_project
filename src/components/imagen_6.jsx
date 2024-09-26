import imagen_6 from '../assets/img/imagen_6.jpg';  
import PropTypes from 'prop-types';  

export const Imagen_6 = (className) => {  
    return (  
        <img src={imagen_6} alt="universo"  className={className} />  
    );  
}  

Imagen_6.propTypes = {  
    className: PropTypes.string  
};