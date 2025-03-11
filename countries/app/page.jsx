"use client"
import Image from "next/image";
import Search from "@/app/ui/search";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Page() {
  const [ data, setData ] = useState([]);
  const [ staticdata, setStaticdata ] = useState([]);
  const url = "/data.json";
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try{
        const response = await fetch (url);
        const datum = await response.json()
        
        setData(datum);
        setStaticdata(datum);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const filterData = (e) => {
    const region = e.currentTarget.dataset.region;
    console.log(e.currentTarget, region);
    
    const filtereddata = staticdata.filter((datum) => datum.region === region);
    setData(filtereddata);
  };

  const searchData = (e) => {
    const searcheddata = e.currentTarget.value;
    if (searcheddata) {
      const filtereddata = staticdata.filter((datum) => datum.name.includes(searcheddata));
      setData(filtereddata);
    }
    
    
  };

  if (!mounted) return null;
  else console.log(theme);

  return (
    <>
          <main className="px-4 desktop:px-20 dark:bg-darkmodeVeryBlue w-full">
            <div className="desktop:flex desktop:justify-between desktop:items-center">
              <div className="px-8 flex gap-6 items-center relative shadow-xl py-4 w-[480px] rounded-md desktop:py-5 dark:bg-darkmodeBlue">
                < Search/>
                <input type="text" placeholder="Search for a country…" className="outline-none bg-white dark:bg-darkmodeBlue dark:placeholder:text-white placeholder:text-[#848484]" onKeyUp={(e) => {searchData(e)}}/>
              </div>
              <div className="mt-10 max-w-52 w-full relative space-y-1 dark:bg-darkmodeBlue">
                <div className="flex justify-between items-center shadow-3xl rounded-md w-[150px]"> 
                  <Menu as="div" className="relative inline-block text-left w-full border-none">
                    <div className="w-full">
                        <MenuButton className="flex w-full h-full border-0 justify-between gap-x-1.5 rounded-md bg-white pl-6 pr-5 py-4 text-sm font-normal text-gray-900 dark:text-white dark:bg-darkmodeBlue">
                        Filter by region
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>
                    </div>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-[150px] origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="pt-4 pl-6 pb-4 dark:bg-darkmodeBlue">
                            <MenuItem>
                                <button
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full text-left" data-region="Africa" onClick={(e) => filterData(e)}
                                >
                                Africa
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full text-left" data-region="Americas" onClick={(e) => filterData(e)}
                                >
                                America
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full text-left" data-region="Asia" onClick={(e) => filterData(e)}
                                >
                                    Asia
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full text-left" data-region="Europe" onClick={(e) => filterData(e)}
                                >
                                Europe
                                </button>
                            </MenuItem>
                            <MenuItem>
                                <button
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden w-full text-left" data-region="Oceania" onClick={(e) => filterData(e)}
                                >
                                    Oceania
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="py-4 pl-6 shadow-3xl absolute z-50 w-full left-0 bg-white rounded-md dark:bg-darkmodeBlue hidden">
                  <ul className="space-y-2">
                    <li>
                      <button>
                        Africa
                      </button>
                    </li>
                    <li>
                      <button>
                        America
                      </button>
                    </li>
                    <li>
                      <button>
                        Asia
                      </button>
                    </li>
                    <li>
                      <button>
                        Europe
                      </button>
                    </li>
                    <li>
                      <button>
                        Oceania
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <section className="grid desktop:grid-cols-4 gap-10 desktop:gap-20 px-14 mt-8">
              {
                data.map((datum, index) => (
                  <Link href={`/country/${datum.name}`} key={index}>
                    <div className="card space-y-6 shadow-xl dark:bg-darkmodeBlue">
                      <div className="w-full">
                        <Image 
                          src={datum.flags.svg}
                          alt={`${datum.name} Flag`}
                          width={264}
                          height={160}
                          layout="responsive"
                        />
                      </div>
                      <div className="space-y-4 pl-6 pb-10">
                          <h1 className="font-extrabold text-lg">
                            {datum.name}
                          </h1>
                          <div className="space-y-2">
                            <p className="text-sm">
                              <span className="font-semibold">
                                Population: 
                              </span> {(datum.population).toLocaleString()}
                            </p>
                            <p className="text-sm">
                              <span className="font-semibold">
                                Region: 
                              </span> {datum.region}
                            </p>
                            <p className="text-sm">
                              <span className="font-semibold">
                                Capital: 
                              </span> {datum.capital}
                            </p>
                          </div>
                      </div>
                    </div>
                  </Link>
                
                )
              )
              }
            </section>
          </main>
    </>
  )
};