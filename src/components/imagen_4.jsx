import imagen_4 from '../assets/img/imagen_4.jpg';  
import PropTypes from 'prop-types';  

export const Imagen_4 = (className) => {  
    return (  
        <img src={imagen_4} alt="universo" className={className} />  
    );  
}  

Imagen_4.propTypes = {  
    className: PropTypes.string  
};