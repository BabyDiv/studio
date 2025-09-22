import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Directions from '@/components/Directions';
import Schedule from '@/components/Schedule';
import Teachers from '@/components/Teachers';
import Price from '@/components/Price';
import Rent from '@/components/Rent';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directions />
        <Schedule />
        <Teachers />
        <Price />
        <Rent />
      </main>
      <Footer />
    </>
  )
}
