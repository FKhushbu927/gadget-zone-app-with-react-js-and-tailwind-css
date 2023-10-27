import React from 'react';
import { getStoredCart } from '../utils/fakeDb';
import { useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';

const Cart = () => {

    const { cartArr } = useLoaderData()
    let total = 0
    if (cartArr.length > 0) {
        for (const eachProduct of cartArr) {
            total = total + eachProduct.price * eachProduct.quantity
        }
    }

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>

                <h2 className='text-xl font-semibold'>
                    {cartArr.length ? 'Review Cart Items' : 'Cart is Empty'}
                </h2>

                <ul className='flex flex-col divide-y divide-gray-600'>
                    {
                        cartArr.map(eachProduct => (
                            <CartItem
                                key={eachProduct.id}
                                eachProduct={eachProduct}
                            />
                        ))}

                </ul>

                <div className='space-y-1 text-right'>
                    <p>
                        Total amount: <span className='font-semibold'>${total}</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
                </div>
                <div>

                      {cartArr.length > 0 ? (
                           <button className="btn-primary">Clear Cart</button>
                      ) : (
                        <button className="btn-primary">Back To shop</button>
                      )}
                  
                    <button className="btn-outlined">Place Order</button>
                </div>

            </div>
        </div>
    );
};

export default Cart;