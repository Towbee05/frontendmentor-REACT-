import { useState } from 'react';
import './style.css';

<<<<<<< HEAD

const Button = ({ handleAddToCart, keyID, data }) => {
    const [active, setActive] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleActive = () => {
        setActive(prevActive => !prevActive);
        handleAddToCart(data, keyID);
    };    


    const dereaseQuality = () => {
        if (quantity > 1){
            setQuantity(prevQuantity => prevQuantity - 1);
            handleAddToCart(data, keyID, quantity);
        };
    };
    
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        handleAddToCart(data, keyID, quantity, 'increase');
    };
    return (
        <>
            { !active &&
                    <button className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-full max-w-40 py-3 rounded-[999px] border border-Rose-400 bg-white text-sm text-Rose-900 font-semibold' onClick={handleActive}>
                        <img src="/assets/images/icon-add-to-cart.svg" alt="" />
                        Add to Cart
                    </button>
            } { active &&
                    <button className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-between w-full max-w-40 py-3 px-3 rounded-[999px] bg-custom-red text-sm font-semibold text-white'> 
                        <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={dereaseQuality}>
                            <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
                        </span>
                            {quantity}
                        <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={increaseQuantity}>
                            <img src="/assets/images/icon-increment-quantity.svg" alt="" />
                        </span>
                    </button>
                }
=======
const Button = ({ handleAddToCart, data, keyID }) => {
    const [active, setActive] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleActive = () => {
        setActive(true);
        handleAddToCart(data, keyID, quantity); // Pass the initial quantity when first added to the cart
    };

    const increaseQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            handleAddToCart(data, keyID, newQuantity); // Update cart with new quantity
            return newQuantity;
        });
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                handleAddToCart(data, keyID, newQuantity); // Update cart with new quantity
                return newQuantity;
            }
            return prevQuantity; // Don't go below 1
        });
    };

    return (
        <>
            {!active ? (
                <button className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 w-full max-w-40 py-3 rounded-[999px] border border-Rose-400 bg-white text-sm text-Rose-900 font-semibold' onClick={handleActive}>
                    <img src="/assets/images/icon-add-to-cart.svg" alt="Add to Cart" />
                    Add to Cart
                </button>
            ) : (
                <button className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-between w-full max-w-40 py-3 px-3 rounded-[999px] bg-custom-red text-sm font-semibold text-white'> 
                    <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={decreaseQuantity}>
                        <img src="/assets/images/icon-decrement-quantity.svg" alt="Decrease Quantity" />
                    </span>
                    {quantity}
                    <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={increaseQuantity}>
                        <img src="/assets/images/icon-increment-quantity.svg" alt="Increase Quantity" />
                    </span>
                </button>
            )}
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
        </>
    );
};

export default Button;
