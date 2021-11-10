import React from 'react'
import { DesktopComputerIcon, CogIcon } from '@heroicons/react/solid'
import { CodeIcon } from '@heroicons/react/outline'
import { FeatureCard } from './FeatureCard'
import { Layout } from '../template/Layout'

export const Features = () => {
  return (
    <Layout title="Feature">
      <div className="w-11/12 flex md:flex-row flex-col space-x-4 justify-center items-center">
        <FeatureCard name="Strength1">
          <CodeIcon className="w-16 h-16 mb-1" />
        </FeatureCard>
        <FeatureCard name="Strength2">
          <DesktopComputerIcon className="w-16 h-16 mb-1" />
        </FeatureCard>
        <FeatureCard name="Strength3">
          <CogIcon className="w-16 h-16 mb-1" />
        </FeatureCard>
      </div>
    </Layout>
  )
}
