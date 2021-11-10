import React from 'react'
import Image from 'next/image'

export const ImageWithText = () => {
  return (
    <>
      <div className="w-full h-screen relative md:block hidden">
        <Image src="/mv.png" alt="main picture" layout="fill" />
        <div className="w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-5 ">
          <p className="font-bold text-7xl">Lorem Ipsum</p>
          <p className="text-xl">simply dummy text of the printing</p>
        </div>
      </div>
      <div className="w-full h-screen relative block md:hidden">
        <Image src="/code.png" alt="main picture" layout="fill" />
        <div className="w-11/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-5 ">
          <p className="font-bold text-7xl">Lorem Ipsum</p>
          <p className="text-xl">simply dummy text of the printing</p>
        </div>
      </div>
    </>
  )
}
