import { Link } from "react-router-dom"
import { Imagen_1 } from "./Imagen_1"
import { Imagen_2 } from "./imagen_2"
import { Imagen_3 } from "./imagen_3"
import { Imagen_4 } from "./imagen_4"
import { Imagen_5 } from "./imagen_5"
import { Imagen_6 } from "./imagen_6"

export const Navigation = () => {
  return (
    <div className='humbnail-container mt-2'>

        <Link to='/imagen_1' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_1 />
                <figcaption>Imagen 1</figcaption>

            </figure>
        </Link>

        <Link to='/imagen_2' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_2 />
                <figcaption>Imagen 2</figcaption>

            </figure>
        </Link>

        <Link to='/imagen_3' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_3 />
                <figcaption>Imagen 3</figcaption>

            </figure>
        </Link>
        <Link to='/imagen_4' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_4 />
                <figcaption>Imagen 4</figcaption>

            </figure>
        </Link>
        <Link to='/imagen_5' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_5 />
                <figcaption>Imagen 5</figcaption>

            </figure>
        </Link>
        <Link to='/imagen_6' className='links'>
            <figure className='thumbnail-image-size'>
                <Imagen_6 />
                <figcaption>Imagen 6</figcaption>

            </figure>
        </Link>

    </div>
  )
}
