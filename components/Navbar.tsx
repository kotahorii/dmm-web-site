import React from 'react'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-red-400 flex justify-center">
      <div className="flex flex-row justify-between items-center w-8/12">
        <Image
          src="/logo.png"
          className="cursor-pointer"
          alt="header logo"
          width={140}
          height={64}
        />
        <div className="flex flex-row justify-between space-x-14 text-white text-lg items-center ">
          <div className="cursor-pointer hover:bg-red-500 px-3 py-2 rounded-lg">
            Portfolio
          </div>
          <div className="cursor-pointer hover:bg-red-500 px-3 py-2 rounded-lg">
            Feature
          </div>
          <div className="cursor-pointer hover:bg-red-500 px-3 py-2 rounded-lg">
            Profile
          </div>
          <div className="cursor-pointer hover:bg-red-500 px-3 py-2 rounded-lg">
            Contact
          </div>
        </div>
      </div>
    </nav>
  )
}
