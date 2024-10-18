import { useState, useEffect } from 'react';
import './style.css'


const Cart = ({cartItem, isOrderConfirmed, increaseIteminCart}) => {
    const [data, setData] = useState(null);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalOrder, setTotalOrder] = useState([]);
    
    useEffect(() => {
        setItemsInCart(cartItem.length);
        const totalOrderHandler = cartItem.forEach((item) => {
            const {number, price} = item;
            return number * price
        });
        setTotalOrder(totalOrderHandler);
        console.log(cartItem);
        
    }, [cartItem])
    
    return (
        <section className='w-auto'>
            <div className='p-6 space-y-6 bg-white rounded-xl h-auto w-full'>
                <h1 className='text-2xl font-bold text-custom-red'> Your cart (<span>{itemsInCart}</span>) </h1>
                <div className='space-y-6'>
                    { cartItem.length > 0 ?
                        (
                        <>
                            <div className='space-y-6'>
                            { cartItem.map((item, index) => 
                                    <div className='flex justify-between items-center' key={index}>
                                        <div className='space-y-2'>
                                            <h1 className='mobile:text-sm text-Rose-900 capitalize font-semibold'>
                                                {item.name}
                                            </h1>
                                            <p className='mobile:text-sm flex gap-2'>
                                                <span className='text-custom-red font-semibold'>
                                                    {item.number}x
                                                </span>
                                                <span className='text-Rose-500 '>
                                                    @ ${item.price.toFixed(2)}
                                                </span>
                                                <span className='text-Rose-500 font-semibold'>
                                                    ${(Number(item.price) * Number(increaseIteminCart)).toFixed(2)}
                                                </span>
                                            </p>
                                        </div>
                                        <button className='mobile:size-5 rounded-full border border-Rose-400 grid place-items-center'>
                                            <img src='/assets/images/icon-remove-item.svg' />
                                        </button>
                                    </div>
                                    ) 
                                }
                            </div>
                            <hr />
                            <div className='text-Rose-900 flex justify-between items-center'>
                                <p className='mobile:text-sm capitalize'>
                                    order total
                                </p>
                                <p className='font-bold mobile:text-2xl'>
                                    $46.50
                                </p>
                            </div>
                            <div className='flex items-center justify-center gap-2 w-full py-4 bg-Rose-50 rounded-lg'>
                                <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
                                <p className='mobile:text-sm text-Rose-900'>
                                    This is a <span className='font-semibold'> carbon-neutral </span> delivery
                                </p>
                            </div>
                            <button className='capitalize bg-custom-red w-full text-center py-4 text-white rounded-[999px]' onClick={isOrderConfirmed}>
                                confirm order
                            </button>
                        </>
                        ) : (
                            <div className='w-full grid place-items-center tablet:gap-4'>
                                <img src="/assets/images/illustration-empty-cart.svg" alt="" />
                                <p className='text-Rose-400'>
                                    Your added items will appear here
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
};

export default Cart