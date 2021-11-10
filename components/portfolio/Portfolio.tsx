import React from 'react'
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
    <div className="w-screen flex flex-col py-24 justify-center items-center bg-gray-100">
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <p className="text-4xl font-semibold mb-2">Portfolio</p>
        <div className=" h-1 w-20 bg-red-400 mb-8"></div>
        <p className="text-center text-lg mb-8">
          It is a long established fact that a reader will be distracted by the
          readable
          <br /> content of a page when looking at its layout.
          <br /> The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters
        </p>
        <div className="w-full flex flex-wrap justify-center">
          {urls.map((src) => (
            <PortfolioImage src={src} key={src} />
          ))}
        </div>
      </div>
    </div>
  )
}
