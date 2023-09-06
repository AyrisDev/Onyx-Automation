import React from 'react'
import ControlTech from 'components/ProductsPage/controltech'
import { russo_one } from '../lib/font'
import database from '../lib/products/database.json'
import Downbutton from 'components/downbutton'
import { useTranslations } from 'next-intl'

const Products = () => {
   const t: any = useTranslations('Database')
   return (
      <div
         className={` ${russo_one.className} text-[36px] flex justify-center items-center mx-auto w-full  `}
      >
         <div className="mt-12 text-left w-[1024px]">
            <table className="table text-black border-2 border-[#E9761F]/80 space-y-6 text-sm w-full ">
               <thead className="bg-[#E9761F]/80 text-white">
                  <tr>
                     <th className="p-3">İçerik</th>
                     <th className="p-3 text-right">Download</th>
                  </tr>
               </thead>
               <tbody>
                  {database.map((database) => (
                     <tr className="border-2 border-[#E9761F]/80">
                        <td className="p-3">
                           <div className="flex align-items-center">
                              <div className=""> {t(`${database.title}`)}</div>
                           </div>
                        </td>
                        <td className="p-3 w-[100px]">
                           <div className="text-right ">
                              <Downbutton
                                 title={t(`${database.download}`)}
                                 url={database.url}
                              />
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Products

export async function getStaticProps(context: any) {
   return {
      props: {
         // You can get the messages from anywhere you like. The recommended
         // pattern is to put them in JSON files separated by locale and read
         // the desired one based on the `locale` received from Next.js.
         messages: (await import(`../../messages/${context.locale}.json`))
            .default,
      },
   }
}
