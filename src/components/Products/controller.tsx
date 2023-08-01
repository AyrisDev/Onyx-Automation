import React from 'react'
import Controller from 'lib/products/controller.json'
import ProductCard from 'components/card'
const controller = () => {
   const section = 'Controller'
   return (
      <div className="sm:flex sm:flex-row gap-2">
         {Controller.map((engines) => (
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

export default controller
