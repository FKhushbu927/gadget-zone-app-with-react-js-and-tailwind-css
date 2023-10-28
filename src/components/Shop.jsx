import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fakeDb';
import { CartContext, ProductContext } from '../App';
import toast from 'react-hot-toast'

const Shop = () => { 
    // const productData = useLoaderData();
    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext)


    const handleAddToCart = eachProduct => {
        let newCart = []

        const exists = cart.find(
            existingProduct => existingProduct.id === eachProduct.id
        )

        if (!exists) {
            eachProduct.quantity = 1
            newCart = [...cart, eachProduct]
        } else {
            const rest = cart.filter(
                existingProduct => existingProduct.id !== eachProduct.id
            )
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(eachProduct.id)
        toast.success('Successfully created!');
     
    }

    return (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>

            {products.map((eachProduct) => (

                <ProductCard
                    key={eachProduct.id}
                    eachProduct={eachProduct}
                    handleAddToCart={handleAddToCart}
                />
                //<p className='text-center' key = {i}>{(i+1) + '.  ' + eachProduct.name}</p>
            ))}
        </div>
    );
};

export default Shop;