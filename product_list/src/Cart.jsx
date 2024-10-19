import React from 'react';
import './style.css';

const Cart = ({ cartItem, isOrderConfirmed }) => {
    return (
        <div className='cart'>
            <h2 className='font-bold text-lg'>Your Cart</h2>
            {cartItem.length === 0 ? (
                <p className='text-Rose-500'>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItem.map((item, index) => (
                        <div key={index} className='flex justify-between items-center py-2'>
                            <div className='flex items-center'>
                                <img src={item.image} alt={item.name} className='w-12 h-12 rounded' />
                                <div className='ml-2'>
                                    <h3 className='text-sm font-semibold'>{item.name}</h3>
                                    <p className='text-sm text-Rose-500'>{item.number} x ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <p className='font-bold'>${(item.number * item.price).toFixed(2)}</p>
                        </div>
                    ))}
                    <button onClick={isOrderConfirmed} className='bg-custom-red text-white rounded-full py-2 px-4'>Confirm Order</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
