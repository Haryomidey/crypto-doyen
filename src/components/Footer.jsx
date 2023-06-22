import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full min-h-[60vh] bg-white flex items-center justify-center'>
      <ul className='flex flex-wrap justify-between gap-y-7 gap-x-6 px-6 laptop:px-14 py-4 w-full h-full'>
        <li>
          <h1 className='text-[#70CEF3] font-semibold'>Useful things</h1>
          <div className='flex flex-col gap-y-2 mt-4'>
          <Link to='/' className='hover:text-gray-500'>Home</Link>
            <Link to='/' className='hover:text-gray-500'>Resources</Link>
            <Link to='/' className='hover:text-gray-500'>Speaking</Link>
            <Link to='/' className='hover:text-gray-500'>Training</Link>
          </div>
        </li>

        <li>
          <h1 className='text-[#70CEF3] font-semibold'>Contact Me</h1>
          <div className='flex flex-col gap-y-2 mt-4'>
          <Link to='/' className='hover:text-gray-500'>+44 (0)7803 729208</Link>
            <Link to='/' className='hover:text-gray-500'>steve@stevebustin.com</Link>
          </div>
        </li>

        <li>
          <h1 className='text-[#70CEF3] font-semibold'>Follow Me</h1>
          <div className='flex flex-col gap-y-2 mt-4'>
            <Link to='/' className='hover:text-gray-500 flex items-center gap-1'>
              <i className="fa-brands fa-youtube text-red-600"></i>
              <span>stevebustin</span>
            </Link>
            <Link to='/' className='hover:text-gray-500 flex items-center gap-1'>
              <i className="fa-brands fa-twitter text-[#55ACEE]"></i>
              <span>@steveinbrighton</span>
            </Link>
            <Link to='/' className='hover:text-gray-500 flex items-center gap-1'>
              <i className="fa-brands fa-linkedin-in text-[#0077B5]"></i>
              <span>in/stevebustin</span>
            </Link>
          </div>
        </li>

        <li>
          <p className='text-[#70CEF3] font-semibold'>
            Your free PDF checklist of everything you need to know before you present
          </p>
          <button className='text-[#EB2566] border-2 px-3 py-2 mt-3 rounded-md border-[#EB2566]'>Download Now</button>
        </li>

        <li>
          <h1 className='font-semibold'>CryptoDoyen</h1>
          <div className='flex flex-col gap-y-2 mt-4'>
          <Link to='/' className='hover:text-gray-500'>© 2023 Steve Bustin | Cookies and privacy</Link>
            <Link to='/' className='hover:text-gray-500'>Designed and built by Neptik</Link>
          </div>
        </li>
          
      </ul>
    </div>
  )
}

export default Footer;
