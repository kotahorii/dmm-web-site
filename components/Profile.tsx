import React from 'react'
import { Layout } from './template/Layout'
import Image from 'next/image'

export const Profile = () => {
  return (
    <Layout title="Profile" background="bg-gray-100">
      <div className="flex md:flex-row flex-col w-9/12 justify-between items-center">
        <div></div>
        <Image
          src="/my-icon.jpg"
          alt="profile icon"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="flex flex-col space-y-3 md:w-2/4 w-10/12 ">
          <div className="md:mt-0 mt-8">
            <p className="font-semibold text-2xl mb-2 md:text-left text-center">
              MyName
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div className="md:mt-0 mt-8">
            <p className="font-semibold text-2xl mb-2 md:text-left text-center">
              MySkills
            </p>
            <p>HTML/CSS,JavaScript,JQuery,PhotoShop</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
