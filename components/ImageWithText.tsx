import React from 'react'
import Image from 'next/image'

export const ImageWithText = () => {
  return (
    <div className="w-full h-screen relative">
      <Image src="/mv.png" alt="main picture" layout="fill" />
      <div className="absolute inset-64 text-white text-center space-y-5 ">
        <p className="font-bold text-7xl">Lorem Ipsum</p>
        <p className="text-xl">simply dummy text of the printing</p>
      </div>
    </div>
  )
}
