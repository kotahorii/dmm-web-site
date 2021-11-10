import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-red-400 flex justify-center">
      <div className="flex flex-row justify-between items-center w-8/12">
        <Image src="/logo.png" alt="header logo" width={140} height={64} />
        <div className="flex flex-row justify-between space-x-14 text-white text-lg items-center ">
          <div className="cursor-pointer">Portfolio</div>
          <div className="cursor-pointer">Feature</div>
          <div className="cursor-pointer">Profile</div>
          <div className="cursor-pointer">Contact</div>
        </div>
      </div>
    </nav>
  )
}
