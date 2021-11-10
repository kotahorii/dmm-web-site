import React from 'react'
import { Layout } from './template/Layout'
import { BsTwitter } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

export const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="flex md:flex-row flex-col w-5/12 justify-between items-center">
        <div className="flex flex-col space-y-5">
          <div>
            <p className="text-xl font-semibold md:text-left text-center">
              Mail
            </p>
            <p className="underline cursor-pointer">xxx@xxx.com</p>
          </div>
          <div>
            <p className="text-xl font-semibold md:text-left text-center">
              Tel
            </p>
            <p className="underline cursor-pointer">000-0000-0000</p>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 mt-5">
          <p className="font-semibold text-2xl mb-2 md:text-left text-center">
            SNS
          </p>
          <div className="flex flex-row md:space-x-3 space-x-5 justify-between items-center">
            <ImFacebook className="h-11 w-11" />
            <BsTwitter className="h-11 w-11" />
            <BsInstagram className="h-11 w-11" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
