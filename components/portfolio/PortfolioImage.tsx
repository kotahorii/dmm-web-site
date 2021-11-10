import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  src: string
}

export const PortfolioImage: VFC<Props> = ({ src }) => {
  return (
    <div className=" px-1 py-0.5">
      <Image
        className="rounded-xl"
        src={src}
        alt="main picture"
        width={300}
        height={250}
      />
    </div>
  )
}
