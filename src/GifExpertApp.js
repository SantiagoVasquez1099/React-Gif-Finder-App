
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  
     const [categories, setCategories] = useState(['Barcelona']);


    //  const handleAdd = () => {
    //      setCategories([...categories, 'One Piece']);

    //  }


  
    return (

    <>
        <h2 className='animate__animated animate__flash' > GIF-FINDER-APP </h2>

        <AddCategory setCategories={ setCategories} />


        <hr />

        <ol>
            {
                categories.map( category =>
                     <GifGrid 
                        key={category}
                        category={ category} 
                     
                     
                     />
                )
            }
            

        </ol>

    </>
  )
}

export default GifExpertApp;
