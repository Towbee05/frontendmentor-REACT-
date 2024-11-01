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

<<<<<<< HEAD

const Main = ({cartItem, addedToCart, handleAddToCart, increaseCart, totalorder, removeFromCart}) => {
    const [cartno, setCartno] = useState(1);
    const [confirmedOrder, setConfirmedOrder] = useState(false);

    const isOrderConfirmed = () => {
        setConfirmedOrder((prevState) => !prevState );
    };    

    const increaseCartNo = (data, productID) => {
        data[productID]['number'] = cartno;
        return data[productID]['number'] += 1;
=======
const Main = ({ cartItem, handleAddToCart }) => {
    const [confirmedOrder, setConfirmedOrder] = useState(false);

    const isOrderConfirmed = () => {
        setConfirmedOrder(prevState => !prevState);
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
    }

    return (
        <>
            <main className='laptop:flex gap-8 max-w-[1440px] space-y-8 laptop:space-y-0 relative'>
                <div className="max-w-[800px] space-y-8">
                    <h1 className="text-[40px] leading-[120%] font-bold text-Rose-900"> Desserts </h1>
                    <Card handleAddToCart={handleAddToCart} />
                </div>
<<<<<<< HEAD
                <Cart cartItem={cartItem} isOrderConfirmed= {isOrderConfirmed} increaseCartNo={increaseCartNo} cartno={cartno} totalorder= {totalorder} removeFromCart={removeFromCart} />
            </main>
            {
                confirmedOrder &&
                <ConfirmOrder cartItem={cartItem} isOrderConfirmed= {isOrderConfirmed} totalorder={totalorder} />
            }
=======
                <Cart cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} />
            </main>
            {confirmedOrder && <ConfirmOrder cartItem={cartItem} isOrderConfirmed={isOrderConfirmed} />}
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
        </>
    );
}

export default function App() {
    const [cartItem, setCartItem] = useState([]);
<<<<<<< HEAD
    const [addedToCart, setAddedToCart] = useState(false);
    const [increaseIteminCart, setIncreaseIteminCart] = useState(1)
    const [data, setData] = useState([]);
    const [totalorder, setTotalorder] = useState(0);

    const handleAddToCart = (data, keyID, quantity, increase) => {
        const newdata = data[keyID];
        // Check existence of the product
        const productIndex = cartItem.findIndex(item => item.name === newdata.name);

        // Add quantity for existing products
        if (productIndex > -1) {
            if (increase) {
                setCartItem(prevItem => prevItem.map((item) => item.name === newdata.name ? {...item, quantity: (item.quantity || 1) + 1 , totalprice: ((item.quantity || 0) + 1) * item.price } : item));
            } else {
                setCartItem(prevItem => prevItem.map((item) => item.name === newdata.name ? {...item, quantity: (item.quantity || 1) - 1 , totalprice: ((item.quantity || 0) - 1) * item.price } : item));
            }
        } else{
            setCartItem(prevItem => [...prevItem,{ ...newdata, quantity : 1, totalprice : newdata.price * newdata.quantity}]);
        };
    };    

    const removeFromCart = (data, keyID) => {
        const dataName = data[keyID].name;
        const items = data.filter(datum => dataName !== datum.name );
        setCartItem(items);
=======

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
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
    };

    useEffect(() => {
        const total = cartItem.reduce((sum, item) => {
            return sum + (item.totalprice || item.price);
        }, 0);    

        setTotalorder(total);
    }, [cartItem]);
    
    return (
<<<<<<< HEAD
        <> 
            <Main cartItem={cartItem} addedToCart={addedToCart} handleAddToCart= {handleAddToCart} increaseIteminCart={increaseIteminCart} totalorder={totalorder} removeFromCart={removeFromCart} />
        </>
    )
=======
        <Main cartItem={cartItem} handleAddToCart={handleAddToCart} />
    );
>>>>>>> 593fc3aa1795d0f56b7d5424f7521b32b79dd23e
}
