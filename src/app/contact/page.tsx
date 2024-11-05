"use client"
import React from 'react'
import { FiPhoneOutgoing } from "react-icons/fi";
import { TbMailPlus } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { Terminal } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Footer from '@/components/footer';



const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "a4231176-5ba0-4537-b611-29fb018a22b7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
      
        console.log(result);
    }
};
  return (
    <>
   <main className='mx-auto max-w-screen-2xl bg-gray-200 min-h-[800px] h-auto'>
  <hr />
  <div className='text-center h-auto'>
    <h1 className='pt-8 text-4xl md:text-5xl font-bold font-sans'>
      Get In <span className='text-pink-800'>Touch</span>
    </h1>
    <p className='text-gray-500 pt-5 text-lg md:text-xl px-4 md:px-0'>
      I love to hear from you! Whether you have a question, <br /> need support, or just want to say hello, feel free to reach out to me.
    </p>
  </div>
  <div className='flex flex-col lg:flex-row gap-12 mx-4 lg:mx-20 mt-12'>
    {/* Contact Info */}
    <div className='bg-gray-900  h-auto w-full lg:w-[35%] rounded-lg p-4'>
      <h2 className='text-white text-3xl font-bold text-center pt-8'>Contact Info</h2>
      <p className='text-gray-400 text-base font-medium pt-2 text-center'>Whether you have a question, need support, or <br /> just want to say hello, feel free to reach out to us</p>
      {/* Phone */}
      <div className='flex gap-5 mx-12 pt-5'>
        <span className='bg-gray-400 hover:bg-gray-500 text-pink-800 h-[60px] rounded-full w-[60px] flex items-center justify-center text-2xl'>
          <FiPhoneOutgoing />
        </span>
        <div className='text-gray-200 pt-2'>
          <p>Phone:</p>
          <p>0307-2502073</p>
        </div>
      </div>
      {/* Email */}
      <div className='flex gap-5 mx-12 pt-5'>
        <span className='bg-gray-400 hover:bg-gray-500 text-pink-800 h-[60px] rounded-full w-[60px] flex items-center justify-center text-3xl'>
          <TbMailPlus />
        </span>
        <div className='text-gray-200 pt-2'>
          <p>Email:</p>
          <p>UmmeHabiba1312</p>
        </div>
      </div>
      {/* Address */}
      <div className='flex gap-5 mx-12 pt-5'>
        <span className='bg-gray-400 hover:bg-gray-500 text-pink-800 h-[60px] rounded-full w-[60px] flex items-center justify-center text-4xl'>
          <IoLocationOutline />
        </span>
        <div className='text-gray-200 pt-2'>
          <p>Address:</p>
          <p>Malir, Karachi Pakistan</p>
        </div>
      </div>
      {/* Icons */}
      <div className='flex text-pink-800 text-4xl pt-7 gap-3 justify-center'>
        <Link href="https://www.facebook.com/profile.php?id=61561757791609" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
        </Link>
        <Link href="https://x.com/UmmeHabiba1312" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/umm-e-habiba-86bb722b6/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </Link>
        <Link href="https://www.instagram.com/umm_e_habiba_official5/" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FaSquareInstagram />
          </a>
        </Link>
      </div>
    </div>

    {/* Form Details */}
    <div className='bg-gray-50  h-auto w-full lg:w-[65%] rounded-lg p-4'>
      <section className='contact form'>
        <form onSubmit={onSubmit}>
          <div className='input-box text-center pt-10'>
            <input className='w-full md:w-[80%] h-[55px] border-2 rounded-xl pl-4' type="text" name='name' placeholder='Enter Your Full Name' required />
          </div>
          <div className=' lg:flex-row '>
            <div className='input-box text-center pt-8'>
              <input className='w-full md:w-[80%]   h-[55px] border-2 rounded-xl px-4' type="email" name='email' placeholder='Enter Your Email' required />
            </div>
            <div className='input-box text-center pt-8'>
              <input className='w-full md:w-[80%]  h-[55px] border-2 rounded-xl px-4' type="tel" name='phone' placeholder='Enter phone no' required />
            </div>
          </div>
          <div className='input-box text-center pt-8'>
            <textarea className='w-full md:w-[80%] h-[140px] border-2 rounded-xl pl-4' name="message" placeholder='Enter Your Message'></textarea>
          </div>
          <div className='text-center pt-8'>
            <button className='w-[50%] md:w-[23%] text-center text-white font-bold bg-pink-800 hover:bg-blue-900 h-[55px] border-2 rounded-2xl' type='submit'>Send Message</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</main>

    <Footer/>
    </>
  )
}

export default Contact
