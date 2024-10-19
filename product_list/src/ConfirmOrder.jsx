import './style.css';

export default function ConfirmOrder({ cartItem, isOrderConfirmed }) {
    const calculateOrderTotal = () => {
        return cartItem.reduce((total, item) => total + item.price * item.number, 0).toFixed(2);
    };

    return (
        <section className='min-h-screen fixed top-0 left-0 right-0 w-full bg-black bg-opacity-60 grid place-items-center'>
            <div className='bg-white px-6 pb-6 pt-10 laptop:p-10 space-y-8 rounded-xl mobile:w-full max-h-[600px] overflow-y-scroll mobile:max-w-[350px]'>
                <div className='space-y-6'>
                    <img src="/assets/images/icon-order-confirmed.svg" alt="" />
                    <div className='space-y-2'>
                        <h1 className='capitalize text-[40px] leading-[120%] font-bold text-Rose-900'>
                            Order Confirmed
                        </h1>
                        <p className='text-Rose-500'>
                            We hope you enjoy your food!
                        </p>
                    </div>
                </div>
                <div className='p-6 bg-Rose-50 text-Rose-900 rounded-lg'>
                    <div className='space-y-4'>
                        {cartItem.map((item, index) => (
                            <div key={index}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={item.image} alt="" className='size-12 rounded' />
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='text-sm font-semibold capitalize'>
                                                {item.name}
                                            </h1>
                                            <p className='flex gap-2'>
                                                <span className='text-custom-red'>
                                                    {item.number}x  {/* Use item.number to display the correct quantity */}
                                                </span>
                                                <span className='text-Rose-500'>
                                                    @${item.price.toFixed(2)}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className='font-semibold'>
                                        ${(item.price * item.number).toFixed(2)}  {/* Calculate total price for each item */}
                                    </p>
                                </div>
                                <hr className='hr-confirm-order' />
                            </div>
                        ))}
                    </div>
                    <div className='text-Rose-900 flex justify-between items-center pt-6'>
                        <p className='text-sm capitalize'>
                            Order Total
                        </p>
                        <p className='text-2xl font-bold'> 
                            ${calculateOrderTotal()} {/* Calculate total of all items in the cart */}
                        </p>
                    </div>
                </div>
                <button className='capitalize bg-custom-red w-full h-14 rounded-[999px] text-white' onClick={isOrderConfirmed}>
                    Start New Order
                </button>
            </div>
        </section>
    );
};
