import React from 'react'
import Image from 'next/image'
import Partner from "lib/products/partners.json";

const Partners = () => {
  return (
    <div className='bg-[#E9761F] w-full h-full p-4 flex justify-center items-center'>
        <div className='grid lg:grid-cols-8 grid-cols-4 gap-2 justify-center items-center'>


{Partner.map((partner) => (
      <Image
      alt="Onyx"
      width={160}
      height={60}
      src={partner.image}
      key={partner.id}
      className=""
   />
      ))}
        </div>
    </div>
  )
}

export default Partners