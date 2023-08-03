import React from 'react'
import ControlTech from 'components/ProductsPage/controltech'
const Products = () => {
   return (
      <div className="flex justify-center items-center mx-auto w-full">
         <ControlTech />
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
