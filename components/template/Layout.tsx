import { VFC, ReactNode } from 'react'

type Props = {
  title: string
  background?: string
  children: ReactNode
}

export const Layout: VFC<Props> = ({
  title,
  background = 'bg-white',
  children,
}) => {
  return (
    <div
      className={`w-screen mx-auto flex flex-col py-24 justify-center items-center ${background}`}
    >
      <div className="w-10/12 flex flex-col items-center">
        <p className="text-4xl font-semibold mb-2">{title}</p>
        <div className=" h-1 w-20 bg-red-400 mb-8"></div>
        <p className="text-center text-lg mb-8 md:w-10/12 w-8/12">
          It is a long established fact that a reader will be distracted by the
          readable
          <br /> content of a page when looking at its layout.
          <br /> The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters
        </p>
        {children}
      </div>
    </div>
  )
}
