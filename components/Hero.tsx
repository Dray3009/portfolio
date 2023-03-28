import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackGroundCircles from './BackGroundCircles'
import Image from 'next/image'
import profilePic from '../public/dre.jpg'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] =useTypewriter({
        words:[" Hi, I'm Andre Vassell", "But you can call me Dre or Dray", "<I love to code && lift heavy things/>"],
       
        loop:true,
        delaySpeed:2000,


      
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackGroundCircles/>
      <Image className='rounded-full relative w-32 h-32 mx-auto object-cover' src={profilePic} alt='picture of me' priority/>

      <div className='z-20'>
        <h2 className='uppercase tracking-[15px] pb-2 text-gray-500'>
          software engineer
        </h2>
       <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
         <span className='mr-3'> {text}</span>
         <Cursor cursorColor='#016fb9'/>

        </h1>

        <div className='pt-5'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          

          <Link href='#hireme'>
          <button className='heroButton'>Hire Me</button>
          </Link>

          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>

          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>

          
          
          

        </div>

      </div>

        
       
   
    </div>
  )
}

export default Hero