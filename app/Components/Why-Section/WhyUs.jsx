import React from 'react'
import Image from 'next/image'
import { items } from './items'

const WhyUs = () => {
  return (
    <>

      <div className="main">

        <div>
          <h1 className='title--text font-bold mb-8 text-3xl text-center text-black'>Why receive tips with Tipify?</h1>
        </div>

        <div className="icon--title--desc">

          {items.map((item, index) => (
            <div key={index}>
              <div>
                <Image
                  className="icon mx-auto"
                  src={item.img}
                  width={30}
                  height={30}
                  alt={item.alt}
                />
              </div>
              <h2 className='font-bold text-2xl text-center'>{item.subtitle}</h2>
              <p className='mb-8 text-sm text-center text-gray-600 w-1/3 mx-auto' >
                {item.description}
              </p>
            </div>
          ))}

          
        </div>

      </div>
      
    
    </>
  )
}

export default WhyUs