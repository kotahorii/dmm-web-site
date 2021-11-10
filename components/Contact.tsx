import React from 'react'
import { Layout } from './template/Layout'
import { BsTwitter } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'

export const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="flex flex-row w-5/12 justify-between">
        <div className="flex flex-col space-y-5">
          <div>
            <p className="text-xl font-semibold">Mail</p>
            <p className="underline cursor-pointer">xxx@xxx.com</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Tel</p>
            <p className="underline cursor-pointer">000-0000-0000</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-2xl mb-2">SNS</p>
          <div className="flex flex-row space-x-3 justify-between items-center">
            <ImFacebook className="h-11 w-11" />
            <BsTwitter className="h-11 w-11" />
            <BsInstagram className="h-11 w-11" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
