import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import SecondSection from '../components/SecondSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {

  const [isTrue, setIsTrue] = useState(false);

  const handleIsTrue = (condition) => {
    if (condition === 'true') {
      setIsTrue(false);
    }
    else{
      setIsTrue(true);
    }
  }

  return (
    <div className='font-[Quicksand] relative'>
      <Navbar />
      <HeroSection />
      <SecondSection />
      <Footer />
      <ScrollToTop />
      <div className='fixed bottom-8 right-8 bg-[#EB2566] cursor-pointer w-14 h-14 z-10 rounded-full flex items-center justify-center chat_shadow' onClick={() => handleIsTrue('true')}>
        <box-icon type='solid' name='chat' color='white'></box-icon>
      </div>
      <div className={`w-[95%] tablet:w-[50%] max-w-[300px] mx-auto h-72 chat_box_shadow bg-white rounded-md fixed ${!isTrue ? 'bottom-10' : 'bottom-[-100%] mobile:bottom-[-50%]'} transition-bottom ease duration-500 mobile:duration-300 right-[50%] tablet:right-[4%] desktop:right-[2%] z-10 translate-x-[50%] tablet:translate-x-0 px-4 py-6`}>
        <p className='font-bold text-xl rotate-90 text-black absolute top-1 right-2 cursor-pointer' onClick={() => handleIsTrue('false')}>x</p>
        <p className=''>Download your free PDF checklist of everything you need to know before you present</p>
        <input type="text" className='w-full py-3 mt-2 border-2 rounded px-3 border-black outline-none' placeholder='Your name' />
        <input type="text" className='w-full py-3 mt-2 border-2 rounded px-3 border-black outline-none' placeholder='Your email address' />
        <button className='w-full py-3 mt-2 border-2 rounded px-3 border-[#EB2566] outline-none text-[#EB2566]'>Download</button>
      </div>
    </div>
  )
}

export default Home;
