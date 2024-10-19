import { useState, useEffect } from 'react';
import ConfirmOrder from './ConfirmOrder';
import Cart from './Cart';
import Button from './Button';
import './style.css';

const Card = ({ handleAddToCart }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('data.json');
                if (!res.ok) {
                    throw new Error('Server Error');
                }
                const resdata = await res.json();
                setData([...resdata]);
            } catch (err) {
                setError(err);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='grid mobile:grid-cols-1 grid-cols-3 gap-6'>
            {loading && <div className="loader"></div>}
            {data && data.map(({ image, name, category, price }, index) => (
                <div className='space-y-9' key={index}>
                    <div className='relative inner-active border-2 border-transparent w-full'>
                        <img src={image.mobile} alt="" className='rounded-lg tablet:hidden laptop:hidden' />
                        <img src={image.tablet} alt="" className='rounded-lg mobile:hidden laptop:hidden' />
                        <img src={image.desktop} alt="" className='rounded-lg mobile:hidden tablet:hidden' />
                        <Button 
                            handleAddToCart={handleAddToCart} 
                            data={{ name, price, image }} 
                            keyID={index} 
                        />
                    </div>
                    <div className='space-y-1'>
                        <h1 className='text-sm text-Rose-500'>{category}</h1>
                        <p className='text-Rose-900 font-semibold'>{name}</p>
                        <p className='text-custom-red font-semibold'>${price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const Main = ({ cartItem, handleAddToCart }) => {
    const [confirmedOrder, setConfirmedOrder] = useState(false);

    const isOrderConfirmed = () => {
        setConfirmedOrder(prevState => !prevState);
    }

    return (
        <>
            <main className='laptop:flex gap-8 max-w-[1440px] space-y-8 laptop:space-y-0 relative'>
                <div className="max-w-[800px] space-y-8">
                    <h1 className="text-[40px] leading-[120%] font-bold text-Rose-900"> Desserts </h1>
                    <Card handleAddToCart={handleAddToCart} />
                </div>
                <Cart cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} />
            </main>
            {confirmedOrder && <ConfirmOrder cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} />}
        </>
    );
}

export default function App() {
    const [cartItem, setCartItem] = useState([]);

    const handleAddToCart = (data, keyID, quantity) => {
        const existingItemIndex = cartItem.findIndex(item => item.name === data.name);
        
        if (existingItemIndex > -1) {
            // If item exists, update quantity
            setCartItem(prevCartItem =>
                prevCartItem.map((item, index) => 
                    index === existingItemIndex 
                        ? { ...item, number: quantity } // Update quantity
                        : item
                )
            );
        } else {
            // If item doesn't exist, add it with the provided quantity
            const { name, price, image } = data;
            setCartItem(prevCartItem => [
                ...prevCartItem, 
                { name, price, number: quantity, image: image.thumbnail } // Add new item
            ]);
        }
    };

    return (
        <Main cartItem={cartItem} handleAddToCart={handleAddToCart} />
    );
}
