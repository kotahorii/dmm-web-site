import React from 'react'
import { DesktopComputerIcon, CogIcon } from '@heroicons/react/solid'
import { CodeIcon } from '@heroicons/react/outline'

export const Features = () => {
  return (
    <div className="w-screen flex flex-col py-24 justify-center items-center">
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <p className="text-4xl font-semibold mb-2">Feature</p>
        <div className=" h-1 w-20 bg-red-400 mb-8"></div>
        <p className="text-center text-lg mb-8">
          It is a long established fact that a reader will be distracted by the
          readable
          <br />
          content of a page when looking at its layout.
          <br />
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters
          <br />
        </p>
        <div className="w-full flex flex-row space-x-2 justify-center">
          <div className="flex flex-col items-center space-y-2 w-1/4">
            <CodeIcon className="w-16 h-16 mb-1" />
            <p className="font-semibold text-2xl ">Strength1</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-1/4">
            <DesktopComputerIcon className="w-16 h-16 mb-1" />
            <p className="font-semibold text-2xl ">Strength2</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 w-1/4">
            <CogIcon className="w-16 h-16 mb-1" />
            <p className="font-semibold text-2xl ">Strength3</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
