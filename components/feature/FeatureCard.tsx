import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const FeatureCard: VFC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col items-center space-y-2 w-1/4">
      {children}
      <p className="font-semibold text-2xl ">Strength2</p>
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
