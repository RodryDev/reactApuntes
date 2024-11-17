//rafc shorcut para crear la const



import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Piece"]);

    /// ... operador spread mantendo o extraigo el contenido del arreglo y le agrego otro
    //si quiero que kaiju este primero lo agrego antes de ...
    //const handdleAdd = () => {
     //   setCategories([...categories, "kaiju N8"]);

        // forma 2
        /*     setCategories( cats => [...cats, 'kaiju N8']);
         */
    //};

    return (
                      /*<button onClick={handdleAdd}>Agregar</button>*/        
 
        <>

            <h2> Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map((category) => (
                       // <li key={category}> {category} </li>

                       <GifGrid 
                       key={category}
                       category={category}
                       />
                     )
                    )
                }
            </ol>
        </>
    );
};
