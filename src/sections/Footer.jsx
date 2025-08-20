import React from 'react'
import { FaPhoneVolume } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
  <div className='w-full bg-black h-auto flex flex-col items-start justify-center lg:px-[80px] px-[20px] lg:py-[50px] py-[30px] gap-[60px]'>
      <div className='w-full h-auto flex lg:flex-row flex-col items-start justify-center gap-[60px]'><div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-[25px]'>
        <div className="text-themegreen font-bold text-left lg:text-4xl text-3xl uppercase">
          Nexovate<span className="text-white">.</span>
        </div>
        <p className='text-gray-300 text-md font-poppins'>Feel free to call us in working hours Mon - fri 10:00am - 7:00pm. Our team will be happy to help answer your queries.</p>
        <div className='flex justify-center items-center gap-2 text-white'><FaPhoneVolume className='text-themegreen size-5' /> +1 234 567 890</div>
        {/* <div className='flex justify-center items-center gap-6'><FaFacebookF className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaTwitter className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaLinkedinIn className='size-4 text-white hover:text-themegreen cursor-pointer' /><FaInstagram className='size-4 text-white hover:text-themegreen cursor-pointer' /></div> */}
      </div>
        <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-6'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Quick Links</h1>
          <ul className='flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'><a href="#home">Home</a></li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'><a href="#about">About Us</a></li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'><a href="#services">Services</a></li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'><a href="#testimonials">Testimonials</a></li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className='lg:w-[15%] w-full flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Services</h1>
          <ul className='flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Cloud Solutions</li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Cybersecurity</li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Network Management</li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>IT Consulting</li>
            <li className='text-gray-300 hover:text-themegreen cursor-pointer text-md'>Software Development</li>
          </ul>
        </div>
        <div className='lg:w-[30%] w-full flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-[23px] capitalize leading-[1.2em] font-poppins'>Subscribe To Newsletter</h1>
          <div className='flex flex-col justify-center items-start w-full'>
            <input type="text" name="" id="" placeholder='Enter Your Email' className='w-full p-4 bg-transparent border-2 border-gray-800 text-white rounded-md' />
            <button className='w-full bg-themegreen hover:bg-white hover:text-black py-4 px-6 text-black text-md font-semibold mt-5 rounded-md'>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className='w-full h-auto flex lg:flex-row flex-col items-center justify-between border-t-2 border-gray-700 pt-6 gap-[10px]'>
        <p className='text-gray-300 text-md font-poppins text-center'>Copyright © 2025. All rights reserved.</p> <ul className='text-gray-300 flex justify-center items-end gap-6'><li>Terms of use</li><li>Privacy Policy</li><li>Cookie Policy</li></ul>
      </div>
    </div>
  )
}

export default Footer