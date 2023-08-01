import { Montserrat } from 'next/font/google'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Navbar() {
   const router = useRouter()

   const t = useTranslations('Menu')
   const [isOpen, setIsOpen] = useState(false)
   const navList = {
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.2,
            staggerChildren: 0.07,
         },
      },
      hidden: {
         opacity: 0,
         transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
         },
      },
   }

   const navItem = {
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            y: { stiffness: 1000, velocity: -100 },
         },
      },
      hidden: {
         y: 50,
         opacity: 0,
         transition: {
            y: { stiffness: 1000, velocity: -100 },
         },
      },
   }

   return (
      <div className="flex items-center justify-between  my-4 md:mx-[75px] mx-[50px]">
         <Image alt="Onyx" height={50} src="/logo.png" width={50} />
         {/*Menu */}
         <div
            className={`${montserrat.className} lowercase hidden lg:flex gap-2`}
         >
            <div className="flex flex-col ">
               <Link href="/">{t('Home')}</Link>
               <span
                  className={
                     router.pathname == '/'
                        ? 'h-1 w-full bg-[#E9761F]'
                        : 'hidden'
                  }
               ></span>
            </div>
            <div className="flex flex-col">
               <Link href="/products"> {t('Products')}</Link>
               <span
                  className={
                     router.pathname == '/products'
                        ? 'h-1 w-full bg-[#E9761F]'
                        : 'hidden'
                  }
               ></span>
            </div>
            <div className="flex flex-col">
               <Link href="/database"> {t('Database')}</Link>
               <span
                  className={
                     router.pathname == '/database'
                        ? 'h-1 w-full bg-[#E9761F]'
                        : 'hidden'
                  }
               ></span>
            </div>

            <div className="flex flex-col">
               <Link href="/aboutus"> {t('AboutUs')}</Link>

               <span
                  className={
                     router.pathname == '/aboutus'
                        ? 'h-1 w-full bg-[#E9761F]'
                        : 'hidden'
                  }
               ></span>
            </div>
            <div className="flex flex-col">
               <Link href="/contact"> {t('Contact')}</Link>
               <span
                  className={
                     router.pathname == '/contact'
                        ? 'h-1 w-full bg-[#E9761F]'
                        : 'hidden'
                  }
               ></span>
            </div>
         </div>
         {/*MobileMenu*/}
         <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
            className={
               isOpen
                  ? 'absolute top-0 right-0 w-full mt-20 z-40 h-[250px] bg-[#E9761F]'
                  : 'hidden'
            }
         >
            <motion.div
               variants={navItem}
               className={`${montserrat.className} lowercase font-bold h-full gap-4 flex flex-col justify-center items-center text-center z-40 `}
            >
               <Link href="/">{t('Home')}</Link>

               <Link href="/products"> {t('Products')}</Link>

               <Link href="/database"> {t('Database')}</Link>

               <Link href="/aboutus"> {t('AboutUs')}</Link>

               <Link href="/contact"> {t('Contact')}</Link>
            </motion.div>
         </motion.div>
         <button className="hidden lg:flex border border-black px-4 py-2 rounded-2xl">
            Bayi Portal
         </button>
         <div
            className={isOpen ? 'hidden' : 'flex lg:hidden cursor-pointer'}
            onClick={() => setIsOpen(!isOpen)}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
               />
            </svg>
         </div>
         <div
            className={isOpen ? 'flex lg:hidden cursor-pointer' : 'hidden'}
            onClick={() => setIsOpen(false)}
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="w-6 h-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
               />
            </svg>
         </div>
      </div>
   )
}
