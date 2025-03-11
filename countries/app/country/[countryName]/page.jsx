"use client"
import { useState, useEffect } from "react";
import BackAction from "@/app/ui/back";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const Country = () => {
    const params = useParams();
    const url = '/data.json';
    const [ data, setData ] = useState(null);
    const [ dataSet, setDataset ] = useState(null);
    const { countryName } = params;

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                const json = await response.json();
                const country = json.find(({name}) => name === decodeURIComponent(countryName));
                setDataset(json || {})
                setData(country || {});
                
            } catch (err) {
                console.log(err);
            };
        };
        
        fetchData();
    }, [countryName]) 
    
    
    if (data === null){
        return (
            <main className="px-7 dark:bg-darkmodeVeryBlue space-y-10 pb-14 desktop:px-20">
                <div> Loading... </div>
            </main>
        )
    }
    
    if (Object.keys(data).length === 0){
        return (
            <main className="px-7 dark:bg-darkmodeVeryBlue space-y-10 pb-14 desktop:px-20">
                <div> Country Not Found!!! </div>
            </main>
        )
        
    }   
    
    return (
        <>
            <main className="px-7 dark:bg-darkmodeVeryBlue space-y-10 pb-14 desktop:px-20">
                <div>
                    <Link href={"/"}>
                        <BackAction />
                    </Link>
                </div>
                <div className="space-y-11 desktop:grid grid-cols-2 gap-36">
                    <Image 
                        src={data.flag}
                        alt={`${data.name} Flag`}
                        width={320}
                        height={215}
                        layout="responsive"
                    />
                    <div className="">
                        <h1 className="text-2xl font-extrabold"> {data.name} </h1>
                        <div className="desktop:grid grid-cols-2 mt-4 space-y-8 desktop:space-y-0">
                            <div className="space-y-2 desktop:space-y-3">
                                <p className="text-sm font-semibold"> Native Name:  <span className="font-light">
                                        {data.nativeName}
                                    </span> 
                                </p>
                                <p className="text-sm font-semibold"> Population: <span className="font-light">
                                        {data.population}
                                    </span> 
                                </p>
                                <p className="text-sm font-semibold"> Region: <span className="font-light">
                                        {data.region}
                                    </span> 
                                </p>
                                <p className="text-sm font-semibold"> Sub Region: <span className="font-light">
                                        {data.subregion}
                                    </span> 
                                </p>
                                <p className="text-sm font-semibold"> Capital: <span className="font-light">
                                        {data.capital}
                                    </span> 
                                </p>
                            </div>
                            <div className="space-y-2 desktop:place-self-start desktop:space-y-3">
                                <p className="text-sm font-semibold">
                                    Top Level Domain: <span className="font-light">
                                        {data.topLevelDomain}
                                    </span>
                                </p>
                                <p className="text-sm font-semibold">
                                    Currencies: <span className="font-light">
                                        {data.currencies.map((currency, index) => (
                                            <span key={index}>
                                                {currency.name}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <p className="text-sm font-semibold">
                                    Languages: <span className="font-light">
                                        { data.languages.map(({ name }, index) => (
                                            <span key={index}>
                                                {name}{ index < data.languages.length - 1 ? ', ' : '' }
                                            </span>
                                            ))
                                        }
                                    </span>
                                </p>
                            </div>
                        </div>
                        <section className="mt-9 space-y-4 desktop:mt-16 desktop:flex gap-4 desktop:space-y-0 items-center w-full">
                            <h1 className="font-semibold text-base"> Border Countries: </h1>
                            <div className="flex items-center gap-4 w-full">
                                {
                                    data.borders ? data.borders.map((border, index) => {
                                        const borderCountry= dataSet.find((bord) => bord.alpha3Code === border)
                                        return <button key={index} className="px-3 py-1 border-[#979797]  shadow-4xl rounded-sm dark:bg-darkmodeBlue text-sm font-light"> 
                                            <Link href={`/country/${borderCountry.name}`}>
                                                {borderCountry.name} 
                                            </Link>
                                        </button>
                                    }
                                    ) : (
                                        "No border found"
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
};

export default Country;