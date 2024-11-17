import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {


    //const [images, setImages] = useState([]);
    //le mando a mi hook usefetch la categoria por prop
    //renombro data por images

const {data:images, loading} = useFetchGifs( category );


//control slash comento bloque de codigo igual que shift alt a

    // useEffect me permite ejecutar cierto codigo de manera condicional
    // [] lista de dependencias para que se dispare una unica vez la peticion http
    //se ejecuta cunaod el componente es ejecutado por primera vez
    //cuando se carga el componente por primera vez lanza una peticion para tener los gifs
    //y los coloca en las imagenes
   /*  useEffect(() => {
        getGifs( category ) 
        .then( setImages)
    }, [ category])
 */





    //en la funcion cuando no tengo {} estoy retornando
    //operador ternario si loading true(cargando) caso contrario
    //(data cargada )
    // { loading ? 'Cargando...' : 'Data cargada'}

    return (

        <>

            <h3 className='card animate__animated animate__backInUp'>{category}</h3>

            { loading && <p className='card animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>

                {

                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}

                        />

                    ))


                    //images.map( ({ id, title }) => (
                    //<li key= { id }> {title} </li>
                    //))
                }

            </div>

        </>
    )


}
