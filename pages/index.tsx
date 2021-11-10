import { Navbar } from '../components/Navbar'
import { Portfolio } from '../components/portfolio/Portfolio'
import { Features } from '../components/feature/Features'
import { ImageWithText } from '../components/ImageWithText'
import { Profile } from '../components/Profile'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col w-screen justify-center items-center min-h-screen">
      <Navbar />
      <ImageWithText />
      <Portfolio />
      <Features />
      <Profile />
      <Contact />
      <Footer />
    </div>
  )
}
