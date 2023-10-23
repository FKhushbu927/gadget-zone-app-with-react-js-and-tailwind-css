import React from 'react';

const ProductCard = () => {
    return (
        <div className='bg-gray-100 p-6 rounded shadow-md'>
            <img
             className='object-cover w-full h-56 mb-6 rounded shadow-md md:h-64 xl:h-80'
             src={}
             alt="" />
             

             <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'> name</p>
             <p className='text-gray-700'>Category</p>
             <p className='text-gray-700 font-bold'>Price</p>
              <button  
              type='button'
               className='btn-primary w-full block'
              
              >
              Add to Cart
              </button>
        </div>
    );
};

export default ProductCard;