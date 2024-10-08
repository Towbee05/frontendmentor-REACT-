import './index.css'
import { FirstCard, SecondCard, ThirdCard, FourthCard } from './Cards'

const FirstComponent = () => {
    return (
        <>
            <section className="text-light-blue w-full bg-gradient-to-b from-gradient-1 to-gradient-2 pt-6 pb-10 grid place-items-center rounded-b-[32px] space-y-6 laptop:rounded-[32px]">
                <h1 className='capitalize font-bold text-lg laptop:text-2xl'>
                    your result
                </h1>
                <div className='flex justify-center items-center flex-col size-[140px] laptop:size-[200px] bg-gradient-to-b from-circle-gradient2 to-circle-gradient1  rounded-full'>
                    <p className='text-white text-[56px] laptop:text-[72px] font-extrabold'> 76 </p>
                    <p className =' font-bold laptop:text-lg' > of 100 </p>
                </div>
                <div className='text-center space-y-4'>
                    <p className='text-2xl text-white font-bold capitalize laptop:text-[32px]'>great</p>
                    <p className='font-medium max-w-[260px] laptop:text-lg'>Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </section>
        </>
    )
};

const SecondComponent = () => {
    return (
        <>
            <section className='px-8 py-6 laptop:place-self-center w-full'>
                <h1 className='capitalize text-custom-navy-blue text-lg laptop:text-2xl font-bold'>
                    summary
                </h1>
                <div className='space-y-4 mt-7'>
                    <FirstCard />
                    <SecondCard />
                    <ThirdCard /> 
                    <FourthCard />
                </div>
                <button className='capitalize text-lg font-bold w-full bg-custom-navy-blue text-white py-4 rounded-[999px] mt-6 laptop:mt-10'> 
                    continue
                </button>
            </section>
        </>
    )
};

export default function App () {
    return (
        <>  
            <div className='laptop:grid grid-cols-2 max-w-[760px] w-full laptop:px-7'>
                <FirstComponent />
                <SecondComponent />
            </div>
        </>
    )
}