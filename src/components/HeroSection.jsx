import React from 'react';
import GetYourVoiceImage from '../assets/images/Get-Your-Voice-Heard-logo.png';
import HelenImage from '../assets/images/helen_image_one.webp';
import ResumeImage from '../assets/images/resume_image.png';

const HeroSection = () => {
  return (
    <div className='flex flex-wrap items-center min-h-[80vh] mt-20'>
        <img src={GetYourVoiceImage} className='w-full laptop:w-[50%] object-cover laptop:h-[450px]' alt="" />
        <img src={HelenImage} className='laptop:w-[50%] object-cover laptop:h-[450px]' alt="" />
        <div className='w-full laptop:w-[50%] laptop:h-[450px] laptop:grid laptop:place-items-center bg-[#67CEF3] min-h-[200px] px-2 py-6 text-white'>
            <div className='flex flex-wrap gap-x-3'>
                <h1 className='font-semibold'>Steve Bustin</h1>
                <p>Business Communication Expert</p>
            </div>
            <p className='text-sm mobile:text-lg mt-3'>Helping organisations and business leaders to get their voice heard by the people who matter.</p>
            <button className='border px-4 py-2 mt-4 font-sm'>Buy my Books</button>
        </div>
        <div className='w-full laptop:w-[50%] laptop:h-[450px] bg-[#1FABE2] min-h-[200px] px-3 py-4 text-white'>
            <div className='flex flex-wrap min-h-[200px] items-center gap-4 justify-center px-2'>
                <img src={ResumeImage} className='w-[40%]' alt="" />
                <p className='text-sm mobile:text-lg mt-3 w-[50%]'>
                    Click to download your FREE PDF checklist of everything you need to know before you Present!
                </p>
            </div>
            <div className='mt-4 mobile:px-6 px-3'>
                <button className='border px-4 py-2 font-sm'>Download now</button></div>
        </div>
    </div>
  )
}

export default HeroSection;
