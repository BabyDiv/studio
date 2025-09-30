import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Directions from '@/components/Directions';
import Schedule from '@/components/Schedule';
import Teachers from '@/components/Teachers';
import Price from '@/components/Price';
import Rent from '@/components/Rent';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Questions from '@/components/Questions';
import Footer from '@/components/Footer';

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
        <Gallery />
        <Reviews />
        <Questions />
        <Footer />
      </main>
    </>
  )
}
