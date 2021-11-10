import { VFC, ReactNode } from 'react'

type Props = {
  name: string
  children: ReactNode
}
export const FeatureCard: VFC<Props> = ({ children, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-3/12 w-10/12 mb:mb-0 mb-10">
      {children}
      <p className="font-semibold text-2xl ">{name}</p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur
      </p>
    </div>
  )
}
