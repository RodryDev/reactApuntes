import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


const [inputValue, setInputValue] = useState('');
const handleInputChange = ( e ) => {
  console.log(); 
  setInputValue(e.target.value);

}

const handleSubmit = (e) => {
  e.preventDefault();


if (inputValue.trim().length > 2) {

       setCategories( cats => [inputValue, ...cats ]);
       setInputValue('');

};
  

}


// los fragments <> no se ponen en caso de tener un elemento que agrupe como el form

  return (
    
    <form onSubmit={handleSubmit}>
           <input
              type='text' 
              value={inputValue}
              onChange={ handleInputChange }
           />
    </form>
        
    
  )
}

//para que  use nuestro componente con los argumentos que yo espero
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired


}