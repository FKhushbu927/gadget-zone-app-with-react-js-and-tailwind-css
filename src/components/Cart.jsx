import React, { useContext } from 'react';
import { deleteShoppingCart, getStoredCart, removeFromdB } from '../utils/fakeDb';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';
import { CartContext } from '../App';
import toast from 'react-hot-toast'



const Cart = () => {

    // const { cart } = useLoaderData()
    const [cart, setCart] = useContext(CartContext)
    let total = 0
    if (cart.length > 0) {
        for (const eachProduct of cart) {
            total = total + eachProduct.price * eachProduct.quantity
        }
    }
    //   Remove Item From Shopping Cart
  const handleRemoveItem = id => {
    const remaining = cart.filter(eachProduct => eachProduct.id !== id)
    setCart(remaining)
    removeFromdB(id)
 
    toast.error('This is an error!');
  }

  const deleteCartHandler = () => {
    setCart([])
    deleteShoppingCart()
    toast.error('This is an error!');
  }
  // place order
  
  const orderHandler = () =>{
    if(cart.length>0){
        setCart([])
        deleteShoppingCart()
        toast.success('Order done')
    }
     toast.error('Cart Empty!!')
  }


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>

                <h2 className='text-xl font-semibold'>
                    {cart.length ? 'Review Cart Items' : 'Cart is Empty'}
                </h2>

                <ul className='flex flex-col divide-y divide-gray-600'>
                    {
                        cart.map(eachProduct => (
                            <CartItem
                                key={eachProduct.id}
                                eachProduct={eachProduct}
                                handleRemoveItem ={handleRemoveItem}
                         
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

                      {cart.length > 0 ? (
                        //  onClick={() => handleRemoveItem(id)}
                           <button onClick={()=> deleteCartHandler()} className="btn-primary">Clear Cart</button>
                      ) : (
                          <Link to = '/shop'>
                                  <button className="btn-primary">Back To shop</button>
                          </Link>
                     
                      )}
                  
                    <button onClick={() => orderHandler()} className="btn-outlined">Place Order</button>
                </div>

            </div>
        </div>
    );
};

export default Cart;