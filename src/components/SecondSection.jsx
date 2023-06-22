import React from 'react';

import TestimonialSlider from './TestimonialSlider';

import Halloween from '../assets/images/halloween.jpeg';
import Stage from '../assets/images/stage.jpeg';
import OnStage from '../assets/images/onStage.jpg';
import OnStageTwo from '../assets/images/onStage_two.jpeg';

const SecondSection = () => {
  return (
    <div className='w-full min-h-screen'>
      
        <div className="flex flex-wrap items-center w-full h-full">
            <div className='flex flex-wrap h-full w-full laptop:w-[50%] text-white'>
                <div className='bg-[#1FABE2] h-[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5 border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <h1 className='text-xl tablet:text-3xl font-semibold'>I speak:</h1>
                    <p className='mt-4 tablet:text-2xl tablet:w-[60%] font-light w-[80%] laptop:w-full'>Keynote Speaker Event Compere Speech Club</p>
                </div>
                <div className='bg-[#67CEF3] h-[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5'>
                    <h1 className='text-xl tablet:text-3xl font-semibold'>You speak:</h1>
                    <p className='mt-4 tablet:text-2xl tablet:w-[60%] font-light w-[80%] laptop:w-full'>Keynote Speaker Event Compere Speech Club</p>
                </div>
            </div>
            <div className='bg-[#67CEF3] w-full h-[200px] small:h-[300px] laptop:h-[350px] laptop:w-[50%]'>
                <iframe className='w-full h-full' src="https://www.youtube.com/embed/hUgDUmuHqJI" title="Introducing Steve Bustin of Get Your Voice Heard" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        
        <div className="flex flex-wrap w-full h-full">
            <div className='flex flex-col justify-center w-full h-[200px] small:h-[300px] laptop:h-[350px] laptop:w-[50%] px-3 desktop_large:px-8 py-5'>
                <h1 className='text-xl tablet:text-3xl font-semibold'>I Speak</h1>
                <p className='mt-4  desktop_large:text-2xl mobile:text-xl'>I inspire and entertain as I give your delegates or staff the tools to become brilliant communicators and to get their voice heard. I deliver keynote speeches, breakout sessions and workshops on a range of business communication topics. I'm also an experienced event MC and compere.</p>
            </div>
            <div className='flex flex-wrap items-center w-full  laptop:w-[50%]'>
                <div className=' -[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <img src={Halloween} className='w-full h-full object-cover' alt="" />
                </div>
                <div className='h-[200px] bg-[#ED3C76] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5'>
                    <p className="flex items-center text-xl desktop_large:text-4xl pt-5 px-3 text-white">Book Me to speak at or host your event <span className='material-symbols-outlined cursor-pointer'>chevron_right</span></p>
                </div>
            </div>
        </div>
        
        <div className="flex flex-wrap items-center w-full h-full">
            <div className='flex flex-wrap h-full w-full laptop:w-[50%] text-white'>
                <div className='bg-[#ED3C76] h-[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5 border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <p className="flex items-center text-xl desktop_large:text-4xl pt-5 px-3 text-white">Talk to me about the skills you or your team need <span className='material-symbols-outlined cursor-pointer'>chevron_right</span></p>
                </div>
                <div className=' -[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <img src={OnStage} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center w-full h-[200px] small:h-[300px] laptop:h-[350px] laptop:w-[50%] px-3 desktop_large:px-8 py-5'>
                <h1 className='text-xl tablet:text-3xl font-semibold'>You Speak</h1>
                <p className='mt-4  desktop_large:text-2xl mobile:text-xl'>Need to make your voice heard? Speaking to a conference audience, pitching to that all important client or addressing your team in meetings? I offer one-to-one speech coaching for business leaders and presentation skills masterclasses for groups. I ensure you make the right impact on your audience - every time.</p>
            </div>
        </div>
      
        <div className="flex flex-wrap w-full h-full">
            <div className='flex flex-col justify-center w-full h-[200px] small:h-[300px] laptop:h-[350px] laptop:w-[50%]'>
                <img src={Stage} className='w-full h-full object-cover' alt="" />
            </div>
            <div className='flex flex-wrap items-center w-full  laptop:w-[50%]'>
                <div className='bg-[#67CEF3] h-[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5 border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <p className="flex items-center text-xl desktop_large:text-4xl pt-5 px-3 text-white">Talk to me about the skills you or your team need <span className='material-symbols-outlined cursor-pointer'>chevron_right</span></p>
                </div>
                <div className='h-[200px] bg-[#36B3E5] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5'>
                    <p className="flex items-center text-xl desktop_large:text-4xl pt-5 px-3 text-white">Book Me to speak at or host your event <span className='material-symbols-outlined cursor-pointer'>chevron_right</span></p>
                </div>
            </div>
        </div>

        <div className="flex flex-wrap items-center w-full h-full">
            <div className='flex flex-wrap h-full w-full laptop:w-[50%] text-white'>
                <div className='bg-[#67CEF3] h-[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] px-3 py-5 border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <p className="flex items-center text-xl desktop_large:text-4xl pt-5 px-3 text-white">Testimonial<span className='material-symbols-outlined cursor-pointer'>chevron_right</span></p>
                </div>
                <div className=' -[200px] small:h-[300px] laptop:h-[350px] w-full laptop:w-[50%] border-t laptop:border-0 border-[#4b4a4a4d]'>
                    <img src={OnStageTwo} className='w-full h-full object-cover' alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center w-full h-[200px] small:h-[300px] laptop:h-[350px] laptop:w-[50%] px-3 desktop_large:px-8 py-5'>
                {/* <h1 className='text-xl tablet:text-3xl font-semibold'>You Speak</h1> */}
                <div className='mt-4  desktop_large:text-2xl mobile:text-xl'>
                    <TestimonialSlider />
                </div>
            </div>
        </div>
          
        {/*  */}
        
        <div className='bg-[#F7F7F7] w-full h-20 flex items-center justify-center laptop:px-10 small:px-5 px-3 py-4'>
            <div className='w-full h-full border-2 bg-white border-[#54414184] hover:border-transparent rounded-md flex items-center justify-between pr-4 laptop:pr-2 desktop_large:pr-0'>
                <input type="text" className='outline-none h-full w-[97%] bg-white px-2' placeholder='Type and hit enter...' />
                <span className='material-symbols-outlined h-full w-[3%] flex items-center justify-center bg-white'>search</span>
            </div>
        </div>
        <div className='bg-[#EB2566] w-full min-h-20 flex items-center gap-x-[150px] justify-center flex-wrap gap-y-3 px-2 small:px-4 laptop:px-8 desktop_large:px-14 py-3 text-white'>
            <p>Get communication tools, tips and inspiration to your inbox:</p>
            <div className='flex items-center justify-center flex-wrap gap-2'>
                <input type="text" className='outline-none px-2 py-2 text-[#FCE6F8] transition-all duration-300 ease bg-[#B31046] border-2 border-transparent hover:border-white hover:bg-[#F85F92] rounded-sm laptop:w-[30%] w-full placeholder-white' placeholder='Your Email Address' />
                <input type="text" className='outline-none px-2 py-2 text-[#FCE6F8] transition-all duration-300 ease bg-[#B31046] border-2 border-transparent hover:border-white hover:bg-[#F85F92] rounded-sm laptop:w-[30%] w-full placeholder-white' placeholder='Your Name' />
                <button type="text" className='outline-none px-2 py-2 text-[#FCE6F8] transition-all duration-300 ease bg-transparent border-2 hover:border-white hover:bg-white hover:text-[#B31046] rounded-sm flex items-center gap-[15px] laptop:w-[30%] w-full'>
                    <span className='material-symbols-outlined'>send</span>
                    <span>Sign me up</span>
                </button>
            </div>
        </div>
    </div>
  )
}
export default SecondSection;
