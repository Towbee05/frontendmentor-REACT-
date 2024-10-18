import { useEffect, useState } from 'react';
import './style.css'


const Button = ({cartItem, handleAddToCart, keyID, data, cartno, increaseCartNo, increaseIteminCart}) => {
    const [active, setActive] = useState(false);
    const [cartNo, setCartNo] = useState(1);
    const handleActive = () => {
        setActive(prevActive => !prevActive);
        handleAddToCart(data, keyID);
    };    

    const dereaseCart = () => {
        if (cartNo > 1){
            setCartNo((prevCart) => prevCart - 1);
        };
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
                        <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={dereaseCart}>
                            <img src="/assets/images/icon-decrement-quantity.svg" alt="" />
                        </span>
                            {cartno}
                        <span role='button' tabIndex={0} className='size-5 grid place-items-center border border-white rounded-full' onClick={increaseCartNo}>
                            <img src="/assets/images/icon-increment-quantity.svg" alt="" />
                        </span>
                    </button>
                }
        </>
    )
}

export default Button;