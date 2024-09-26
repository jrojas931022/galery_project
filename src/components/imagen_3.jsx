import imagen_3 from '../assets/img/imagen_3.jpg';  
import PropTypes from 'prop-types';  

export const Imagen_3 = (className) => {  
    return (  
        <img src={imagen_3} alt="universo" width="550" height="400" className={className} />  
    );  
}  

Imagen_3.propTypes = {  
    className: PropTypes.string  
};