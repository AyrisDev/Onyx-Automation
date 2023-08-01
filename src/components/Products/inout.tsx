import React from 'react'
import InOut from 'lib/products/inout.json'
import ProductCard from 'components/card'

const inout = () => {
   const section = 'Controller'
   return (
      <div className="sm:flex sm:flex-row gap-2">
         {InOut.map((engines) => (
            <ProductCard
               title={engines.title}
               subTitle={engines.subTitle}
               image={engines.image}
               description={engines.description}
               section={section}
               key={engines.title}
            />
         ))}
      </div>
   )
}

export default inout
