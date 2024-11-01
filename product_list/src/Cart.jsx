import React from 'react';
import './style.css';

<<<<<<< HEAD

const Cart = ({cartItem, isOrderConfirmed, totalorder, removeFromCart}) => {
    const [data, setData] = useState(null);
    const [itemsInCart, setItemsInCart] = useState(0);
     
    const removeItem = (e) => {
        const index = Number(e.currentTarget.parentElement.dataset.index);
        removeFromCart(cartItem, index);
    };

    useEffect(() => {
        setItemsInCart(cartItem.length);
    }, [cartItem]);
    
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
                                    <div className='flex justify-between items-center' key={index} data-index={index}>
                                        <div className='space-y-2'>
                                            <h1 className='mobile:text-sm text-Rose-900 capitalize font-semibold'>
                                                {item.name}
                                            </h1>
                                            <p className='mobile:text-sm flex gap-2'>
                                                <span className='text-custom-red font-semibold'>
                                                    {item.quantity}x
                                                </span>
                                                <span className='text-Rose-500 '>
                                                    @ ${item.price.toFixed(2)}
                                                </span>
                                                <span className='text-Rose-500 font-semibold'>
                                                    { item.totalprice ? 
                                                        `$${(Number(item.totalprice)).toFixed(2)}`
                                                        :
                                                        `$${(item.price).toFixed(2)}`
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                        <button className='size-5 rounded-full border border-Rose-400 grid place-items-center' onClick={(e) => removeItem(e)}>
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
                                    ${totalorder.toFixed(2)}
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
=======
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
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
                </div>
            )}
        </div>
    );
};

export default Cart;
