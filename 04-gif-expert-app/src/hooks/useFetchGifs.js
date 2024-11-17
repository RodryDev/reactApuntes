//la importacion de react no es necesaria 
//a menos que regresemos jsx al igual que el return
//los custom hooks pueden tener estado

import { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'


//el estado inicial va a ser un objeto con un arreglo vacio

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true

    });
   // useEffect me permite ejecutar cierto codigo de manera condicional
    // [] lista de dependencias para que se dispare una unica vez la peticion http
    //se ejecuta cunaod el componente es ejecutado por primera vez
    useEffect(() => {
        
        getGifs(category)
             .then(imgs => {

                setState( {
                    data:imgs,
                    loading:false
    });
             })



    }, [category])




    return state;

}