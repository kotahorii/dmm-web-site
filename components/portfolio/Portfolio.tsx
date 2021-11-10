import React from 'react'
import { Layout } from '../Layout'
import { PortfolioImage } from './PortfolioImage'

export const Portfolio = () => {
  const urls = [
    '/sketch.jpg',
    '/talk.jpg',
    '/webcamp-mother.png',
    '/webcamp.png',
    '/websuku.png',
    '/write.jpg',
  ]
  return (
    <Layout background="bg-gray-100" title="Portfolio">
      <div className="w-full flex flex-wrap justify-center">
        {urls.map((src) => (
          <PortfolioImage src={src} key={src} />
        ))}
      </div>
    </Layout>
  )
}
