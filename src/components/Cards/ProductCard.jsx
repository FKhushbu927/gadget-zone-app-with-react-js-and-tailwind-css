import React from 'react';

const ProductCard = ({eachProduct}) => {

   const {picture} = eachProduct

    return (
        <div >
            <img 
            className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
            src={picture}
             alt="" 
             />
        </div>
    );
};

export default ProductCard;