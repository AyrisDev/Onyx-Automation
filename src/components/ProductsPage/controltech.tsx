'use client'
import React from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { russo_one } from '../../lib/font'
import ControlDrivers from './controldrivers'
import LeroySomer from './leroy'
import Nexcom from './nexcom'
export default function ControlTech() {
   const t = useTranslations('ProductPage')

   return (
      <motion.div className="flex flex-col mx-auto my-12 px-[50px] w-full justify-center items-center text-center  ">
         <div className="w-full mt-12">
            <span className={` ${russo_one.className} text-[36px] `}>
               {' '}
               {t('ControlTech')}
            </span>
            <div className="mt-12">
               <ControlDrivers />
            </div>
         </div>
         <div className="w-full mt-12">
            <span
               className={` ${russo_one.className} text-[36px] text-left w-full `}
            >
               {t('Leroy')}
            </span>
            <div className="mt-12">
               <LeroySomer />
            </div>
         </div>
         <div className="w-full mt-12">
            <span
               className={` ${russo_one.className} text-[36px] text-left w-full`}
            >
               {t('Nexcom')}
            </span>
            <div className="mt-12">
               <Nexcom />
            </div>
         </div>
         <div className="w-full mt-12">
            <span
               className={` ${russo_one.className} text-[36px] text-left w-full `}
            >
               {t('PLC')}
            </span>
            <div className="mt-12">
               <LeroySomer />
            </div>
         </div>
         <div className="w-full mt-12">
            <span
               className={` ${russo_one.className} text-[36px] text-left w-full`}
            >
               {t('ServoTronix')}
            </span>
            <div className="mt-12">
               <Nexcom />
            </div>
         </div>
         <div className="w-full mt-12 ">
            <span
               className={` ${russo_one.className} text-[36px] text-left w-full `}
            >
               {t('HPB')}
            </span>
            <div className="mt-12">
               <LeroySomer />
            </div>
         </div>
      </motion.div>
   )
}
