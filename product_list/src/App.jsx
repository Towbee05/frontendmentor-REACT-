import { useState, useEffect } from 'react';
import ConfirmOrder from './ConfirmOrder';
import Cart from './Cart';
import Button from './Button';
import './style.css';

const Card = ({ cartItem, handleAddToCart }) => {
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
                            keyID={index} 
                            data={{ name, price, image }} 
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

const Main = ({ cartItem, handleAddToCart, increaseIteminCart }) => {
    const [confirmedOrder, setConfirmedOrder] = useState(false);

    const isOrderConfirmed = () => {
        setConfirmedOrder(prevState => !prevState);
    }

    return (
        <>
            <main className='laptop:flex gap-8 max-w-[1440px] space-y-8 laptop:space-y-0 relative'>
                <div className="max-w-[800px] space-y-8">
                    <h1 className="text-[40px] leading-[120%] font-bold text-Rose-900"> Desserts </h1>
                    <Card handleAddToCart={handleAddToCart} cartItem={cartItem} />
                </div>
                <Cart cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} increaseIteminCart={increaseIteminCart} />
            </main>
            {confirmedOrder && <ConfirmOrder cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} />}
        </>
    );
}

export default function App() {
    const [cartItem, setCartItem] = useState([]);

    const handleAddToCart = (data, productID) => {
        const existingItem = cartItem.find(item => item.name === data.name);
        if (existingItem) {
            // If item exists, increase quantity
            setCartItem(prevCartItem =>
                prevCartItem.map(item =>
                    item.name === data.name 
                        ? { ...item, number: item.number + 1 } 
                        : item
                )
            );
        } else {
            // If item doesn't exist, add it
            const { name, price, image } = data;
            setCartItem(prevCartItem => [
                ...prevCartItem, 
                { name, price, number: 1, image: image.thumbnail }
            ]);
        }
    };

    const increaseIteminCart = (itemName) => {
        setCartItem(prevCartItem =>
            prevCartItem.map(item =>
                item.name === itemName 
                    ? { ...item, number: item.number + 1 } 
                    : item
            )
        );
    };

    const decreaseIteminCart = (itemName) => {
        setCartItem(prevCartItem => {
            const existingItem = prevCartItem.find(item => item.name === itemName);
            if (existingItem.number > 1) {
                return prevCartItem.map(item =>
                    item.name === itemName 
                        ? { ...item, number: item.number - 1 } 
                        : item
                );
            } else {
                // If quantity is 1, remove item from cart
                return prevCartItem.filter(item => item.name !== itemName);
            }
        });
    };

    return (
        <> 
            <Main 
                cartItem={cartItem} 
                handleAddToCart={handleAddToCart} 
                increaseIteminCart={increaseIteminCart} 
                decreaseIteminCart={decreaseIteminCart} 
            />
        </>
    );
}
