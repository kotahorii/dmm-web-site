import React from 'react'
import { DesktopComputerIcon, CogIcon } from '@heroicons/react/solid'
import { CodeIcon } from '@heroicons/react/outline'
import { FeatureCard } from './FeatureCard'
import { Layout } from '../Layout'

export const Features = () => {
  return (
    <Layout title='Feature'>
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
    </Layout>
  )
}
