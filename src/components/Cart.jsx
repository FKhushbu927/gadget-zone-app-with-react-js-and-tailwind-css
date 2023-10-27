import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDb';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([])

    const pData = useLoaderData();
    useEffect(() => {
        const savedCart = getStoredCart()
        let newArr=[]
        for (const id in savedCart) {
            const foundProduct = pData.find(product => product.id === id)
            if (foundProduct) {
                foundProduct.quantity = savedCart[id]
                newArr.push(foundProduct)
            //    setCart([...cart, foundProduct])
            }
        }
       setCart(newArr)
       console.log(newArr)
    }, [])


    return (
        <div>
            cart
        </div>
    );
};

export default Cart;