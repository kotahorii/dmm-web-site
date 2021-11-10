import React from 'react'
import { PortfolioImage } from './PortfolioImage'
import { Layout } from '../template/Layout'

export const Portfolio = () => {
  return (
    <Layout title="Portfolio" background="bg-gray-100">
      <div className="w-full flex flex-wrap justify-center">
        <PortfolioImage src="/sketch.jpg" />
        <PortfolioImage src="/talk.jpg" />
        <PortfolioImage src="/webcamp-mother.png" />
        <PortfolioImage src="/webcamp.png" className="hidden md:block" />
        <PortfolioImage src="/websuku.png" className="hidden md:block" />
        <PortfolioImage src="/write.jpg" className="hidden md:block" />
      </div>
    </Layout>
  )
}
