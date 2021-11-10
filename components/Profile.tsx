import React from 'react'
import { Layout } from './Layout'
import Image from 'next/image'

export const Profile = () => {
  return (
    <Layout title="Profile" background="bg-gray-100">
      <div className="flex flex-row w-9/12 justify-between items-center">
        <div></div>
        <Image
          src="/my-icon.jpg"
          alt="profile icon"
          width={250}
          height={250}
          className="rounded-full"
        />
        <div className="flex flex-col space-y-3 w-2/4">
          <div>
            <p className="font-semibold text-2xl mb-2">MyName</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div>
            <p className="font-semibold text-2xl mb-2">MySkills</p>
            <p>HTML/CSS,JavaScript,JQuery,PhotoShop</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
