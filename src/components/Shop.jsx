import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';

const Shop = () => {
    const productData = useLoaderData();
    const  handleAddToCart = id =>{
        console.log(id);
    }
 
    return (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>

            {productData.map((eachProduct) => (

                <ProductCard
                    key = {eachProduct.id}
                    eachProduct={eachProduct}
                    handleAddToCart={handleAddToCart}
                 />
                //<p className='text-center' key = {i}>{(i+1) + '.  ' + eachProduct.name}</p>
            ))}
        </div>
    );
};

export default Shop;