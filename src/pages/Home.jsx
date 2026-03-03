import Hero from '../sections/Hero'
import Animate from '../sections/Animate';
import WhyUs from '../sections/WhyUs'
import Location from '../sections/Location'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Animate />
      <WhyUs />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
