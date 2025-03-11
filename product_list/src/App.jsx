import { useState, useEffect } from 'react'
import ConfirmOrder from './ConfirmOrder';
import Cart from './Cart';
import Button from './Button';
import './style.css'

const Card = ({cartItem, addedToCart, handleAddToCart, increaseCartNo, cartno}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch('data.json');
                
                if (!res.ok) {
                    throw new Error('Server Error')
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
        <>
            <div className='grid mobile:grid-cols-1 grid-cols-3 gap-6'>
                { loading &&
                    <div className="loader"></div> 
                }
                { data &&
                    data.map(({image, name, category, price}, index) => (
                        <div className='space-y-9'  key={index}>
                            <div className='relative inner-active border-2 border-transparent w-full'>
                                <img src={image.mobile} alt="" className='rounded-lg tablet:hidden laptop:hidden'/>
                                <img src={image.tablet} alt="" className='rounded-lg mobile:hidden laptop:hidden'/>
                                <img src={image.desktop} alt="" className='rounded-lg mobile:hidden tablet:hidden'/>
                                <Button handleAddToCart= {handleAddToCart} keyID={index} cartItem={cartItem} data={data} increaseCartNo={increaseCartNo} cartno={cartno} />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='text-sm text-Rose-500'> {category} </h1>
                                <p className='text-Rose-900 font-semibold'>
                                    {name}
                                </p>
                                <p className='text-custom-red font-semibold'>
                                    ${price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const Main = ({cartItem, addedToCart, handleAddToCart, increaseCart, totalorder, removeFromCart}) => {
    const [cartno, setCartno] = useState(1);
    const [confirmedOrder, setConfirmedOrder] = useState(false);

    const isOrderConfirmed = () => {
        setConfirmedOrder((prevState) => !prevState );
    };    

    const increaseCartNo = (data, productID) => {
        data[productID]['number'] = cartno;
        return data[productID]['number'] += 1;
    }
    return (
        <>
            <main className='laptop:flex gap-8 max-w-[1440px] space-y-8 laptop:space-y-0 relative'>
                <div className="max-w-[800px] space-y-8">
                    <h1 className="text-[40px] leading-[120%] font-bold text-Rose-900"> Desserts </h1>
                    <Card addedToCart={addedToCart} handleAddToCart= {handleAddToCart} increaseCart={increaseCart} cartItem={cartItem} increaseCartNo={increaseCartNo} cartno={cartno}/>
                </div>
                <Cart cartItem={cartItem} isOrderConfirmed= {isOrderConfirmed} increaseCartNo={increaseCartNo} cartno={cartno} totalorder= {totalorder} removeFromCart={removeFromCart} />
            </main>
            {
                confirmedOrder &&
                <ConfirmOrder cartItem={cartItem} isOrderConfirmed= {isOrderConfirmed} totalorder={totalorder} />
            }
        </>
    )
}

export default function App () {
    const [cartItem, setCartItem] = useState([]);
    const [addedToCart, setAddedToCart] = useState(false);
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
    };

    useEffect(() => {
        const total = cartItem.reduce((sum, item) => {
            return sum + (item.totalprice || item.price);
        }, 0);    

        setTotalorder(total);
    }, [cartItem]);
    
    return (
        <> 
            <Main cartItem={cartItem} addedToCart={addedToCart} handleAddToCart= {handleAddToCart}  totalorder={totalorder} removeFromCart={removeFromCart} />
        </>
    )
}

