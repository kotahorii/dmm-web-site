import React from 'react'
import { DesktopComputerIcon, CogIcon } from '@heroicons/react/solid'
import { CodeIcon } from '@heroicons/react/outline'
import { FeatureCard } from './FeatureCard'

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
          <FeatureCard>
            <CodeIcon className="w-16 h-16 mb-1" />
          </FeatureCard>
          <FeatureCard>
            <DesktopComputerIcon className="w-16 h-16 mb-1" />
          </FeatureCard>
          <FeatureCard>
            <CogIcon className="w-16 h-16 mb-1" />
          </FeatureCard>
        </div>
      </div>
    </div>
  )
}
