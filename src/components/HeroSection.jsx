import React from 'react';
import GetYourVoiceImage from '../assets/images/Get-Your-Voice-Heard-logo.png';
import HelenImage from '../assets/images/helen_image_one.webp';
import ResumeImage from '../assets/images/resume_image.png';

const HeroSection = () => {
  return (
    <div className='flex flex-wrap items-center min-h-[80vh] desktop_large:h-[90vh] mt-20 desktop_large:mt-[-15px] desktop_large:pt-'>
        <div className='w-full laptop:w-[50%] desktop_large:w-[25%] object-cover laptop:h-[400px] desktop_large:h-full desktop_large:flex items-center justify-center'>
            <img src={GetYourVoiceImage} alt="" />
        </div>
        <img src={HelenImage} className='laptop:w-[50%] desktop_large:w-[25%] object-cover laptop:h-[400px] desktop_large:h-full' alt="" />
        <div className='w-full laptop:w-[50%] desktop_large:w-[25%] laptop:h-[400px] desktop_large:h-[100%] bg-[#67CEF3] min-h-[200px] px-3 laptop:px-5 py-6 laptop:py-16 text-white desktop_large:flex justify-center flex-col'>
            <div className='flex flex-wrap gap-x-3 desktop_large:pt-16'>
                <h1 className='font-semibold laptop:text-2xl desktop_large:text-5xl laptop:mb-4'>Queen Helen</h1>
                <p className='laptop:text-xl desktop_large:text-4xl desktop_large:leading-[1.4]'>Business Communication Expert</p>
            </div>
            <p className='text-sm mobile:text-lg laptop:text-xl desktop_large:text-3xl desktop_large:leading-[1.4] mt-3 laptop:mb-4'>Helping organisations and business leaders to get their voice heard by the people who matter.</p>
            <button className='border desktop_large:border-2 px-4 py-2 desktop_large:py-3 mt-4 text-sm desktop_large:mt-10 desktop_large:w-[200px] mobile:text-xl desktop_large:text-2xl'>Buy my Books</button>
        </div>
        <div className='w-full laptop:w-[50%] desktop_large:w-[25%] laptop:h-[400px] desktop_large:h-full bg-[#1FABE2] min-h-[200px] px-3 py-4 laptop:pt-16 text-white desktop_large:flex justify-center flex-col'>
            <div className='flex flex-wrap min-h-[200px] items-center gap-4 desktop_large:pt-16 mobile:mb-4'>
                <img src={ResumeImage} className='w-[40%]' alt="" />
                <p className='text-sm mobile:text-lg mt-3 w-[50%]'>
                    Click to download your FREE PDF checklist of everything you need to know before you Present!
                </p>
            </div>
            <button className='border desktop_large:border-2 px-4 py-2 desktop_large:py-3 mt-4 text-sm desktop_large:mt-10 desktop_large:w-[250px] mobile:text-xl desktop_large:text-2xl'>Download now</button>
        </div>
    </div>
  )
}

export default HeroSection;

