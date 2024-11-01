import { useEffect, useState } from 'react';
import './style.css'


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
        </>
    )
}

export default Button;