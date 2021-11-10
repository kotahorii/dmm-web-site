import Image from 'next/image'
import { CodeIcon } from '@heroicons/react/outline'

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <nav className="w-full h-16 bg-red-400 flex justify-center">
        <div className="flex flex-row justify-between items-center w-8/12">
          <Image src="/logo.png" alt="header logo" width={140} height={64} />
          <div className="flex flex-row justify-between space-x-14 text-white text-lg items-center ">
            <div className="cursor-pointer">Portfolio</div>
            <div className="cursor-pointer">Feature</div>
            <div className="cursor-pointer">Profile</div>
            <div className="cursor-pointer">Contact</div>
          </div>
        </div>
      </nav>
      <div className="w-full h-screen relative">
        <Image src="/mv.png" alt="main picture" layout="fill" />
        <div className="absolute inset-64 text-white text-center space-y-5 ">
          <p className="font-bold text-7xl">Lorem Ipsum</p>
          <p className="text-xl">simply dummy text of the printing</p>
        </div>
      </div>
      <div className="w-screen flex flex-col py-24 justify-center items-center bg-gray-100">
        <div className="w-10/12 mx-auto flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2">Portfolio</p>
          <div className=" h-1 w-20 bg-red-400 mb-8"></div>
          <p className="text-center text-lg mb-8">
            It is a long established fact that a reader will be distracted by
            the readable
            <br /> content of a page when looking at its layout.
            <br /> The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters
          </p>
          <div className="w-full flex flex-wrap justify-center">
            <div className=" px-1 py-0.5">
              <Image
                src="/sketch.jpg"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
            <div className=" px-1 py-0.5">
              <Image
                src="/talk.jpg"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
            <div className=" px-1 py-0.5">
              <Image
                src="/webcamp-mother.png"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
            <div className=" px-1 py-0.5">
              <Image
                src="/webcamp.png"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
            <div className=" px-1 py-0.5">
              <Image
                src="/websuku.png"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
            <div className=" px-1 py-0.5">
              <Image
                src="/write.jpg"
                alt="main picture"
                width={300}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-col py-24 justify-center items-center">
        <div className="w-10/12 mx-auto flex flex-col items-center">
          <p className="text-4xl font-semibold mb-2">Feature</p>
          <div className=" h-1 w-20 bg-red-400 mb-8"></div>
          <p className="text-center text-lg mb-8">
            It is a long established fact that a reader will be distracted by
            the readable
            <br />
            content of a page when looking at its layout.
            <br />
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
            <br />
          </p>
          <div className="w-full flex space-x-2 justify-center">
            <div className="flex flex-col items-center space-y-2 w-1/3">
              <CodeIcon className="w-16 h-16" />
              <p className="font-semibold text-2xl ">Strength1</p>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            </div>
          </div>
          <div className="w-full flex space-x-2 justify-center">
            <div className="flex flex-col items-center space-y-2 w-1/3">
              <CodeIcon className="w-16 h-16" />
              <p className="font-semibold text-2xl ">Strength1</p>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
