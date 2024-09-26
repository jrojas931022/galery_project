import imagen_5 from '../assets/img/imagen_5.jpg';  
import PropTypes from 'prop-types';  

export const Imagen_5 = (className) => {  
    return (  
        <img src={imagen_5} alt="universo"  className={className} />  
    );  
}  

Imagen_5.propTypes = {  
    className: PropTypes.string  
};