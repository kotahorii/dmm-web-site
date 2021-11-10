import { VFC } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  className?: string
}

export const PortfolioImage: VFC<Props> = ({ src, className }) => {
  return (
    <div className=" px-1 py-0.5">
      <div className={className}>
        <Image
          className="rounded-xl"
          src={src}
          alt="main picture"
          width={300}
          height={250}
        />
      </div>
    </div>
  )
}
