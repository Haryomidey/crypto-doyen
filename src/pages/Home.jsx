import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import SecondSection from '../components/SecondSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='font-[Quicksand]'>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <Footer />
    </div>
  )
}

export default Home;
