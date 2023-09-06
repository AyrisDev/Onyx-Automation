import React, { useState } from 'react'
import { roboto_mono, russo_one } from '../../lib/font'

import { useTranslations } from 'next-intl'
import Engines from './engines'
import Controller from './controller'
import InOut from './inout'
import Drivers from './drivers'
const Products = () => {
   const [engines, setEngines] = useState(true)
   const [drivers, setDrivers] = useState(false)
   const [controller, setController] = useState(false)
   const [inout, setInout] = useState(false)

   const [active, setActive] = useState()
   const t = useTranslations('Products')

   return (
      <div className="flex bg-[#FFFBF2]">
         <div className="my-[45px] w-full">
            <div className="flex justify-center items-center text-center w-full">
               <span className={` ${russo_one.className} text-[36px]`}>
                  {t('Title')}
               </span>
            </div>
            <div className=" mt-[10px] flex ">
               <div className="container px-6 py-8 mx-auto">
                  <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-[#E9761F] rounded-lg text-white">
                     <div className="grid gap-3 md:grid-cols-4 grid-cols-2 p-2 text-white">
                        <button
                           onClick={() => {
                              setEngines(false)
                              setDrivers(true)
                              setController(false)
                              setInout(false)
                           }}
                           className={
                              drivers
                                 ? 'flex items-center justify-center px-3 py-2 font-bold text-black  transition-colors duration-300 transform bg-[#FEEECC] rounded-lg  focus:outline-none d'
                                 : 'px-3 py-2 font-bold text-white hover:text-black transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none  hover:bg-gray-200'
                           }
                        >
                           <span className="mx-1">{t('Drivers')}</span>
                        </button>
                        <button
                           onClick={() => {
                              setEngines(true)
                              setDrivers(false)
                              setController(false)
                              setInout(false)
                           }}
                           className={
                              engines
                                 ? 'flex items-center justify-center px-3 py-2 font-bold text-black  transition-colors duration-300 transform bg-[#FEEECC] rounded-lg  focus:outline-none '
                                 : 'px-3 py-2 font-bold text-white  transition-colors hover:text-black  duration-300 transform bg-transparent rounded-lg focus:outline-none '
                           }
                        >
                           <span className="mx-1">{t('Engines')}</span>
                        </button>
                        <button
                           onClick={() => {
                              setEngines(false)
                              setDrivers(false)
                              setController(true)
                              setInout(false)
                           }}
                           className={
                              controller
                                 ? 'flex items-center justify-center px-3 py-2 font-bold text-black  transition-colors duration-300 transform bg-[#FEEECC] rounded-lg  focus:outline-none '
                                 : 'px-3 py-2 font-bold text-white  transition-colors hover:text-black  duration-300 transform bg-transparent rounded-lg focus:outline-none '
                           }
                        >
                           <span className="mx-1">{t('Controller')}</span>
                        </button>
                        <button
                           onClick={() => {
                              setEngines(false)
                              setDrivers(false)
                              setController(false)
                              setInout(true)
                           }}
                           className={
                              inout
                                 ? 'flex items-center justify-center px-3 py-2 font-bold text-black  transition-colors duration-300 transform bg-[#FEEECC] rounded-lg  focus:outline-none '
                                 : 'px-3 py-2 font-bold text-white  transition-colors hover:text-black  duration-300 transform bg-transparent rounded-lg focus:outline-none '
                           }
                        >
                           <span className="mx-1">{t('InOut')}</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className=" flex justify-center items-center ">
               {engines && <Engines />}
               {controller && <Controller />}
               {inout && <InOut />}
               {drivers && <Drivers />}
            </div>
         </div>
      </div>
   )
}

export default Products
