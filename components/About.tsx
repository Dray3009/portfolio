import React from 'react'
import Image from 'next/image'
import profilePic from '../public/dre2.jpg'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <div className=' flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.div
        initial={{
            x: -200,
            opacity:0
        }}

        transition={{
            duration: 1.5,
        }}


        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{once:true}}
        >
        <Image className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 h-95 xl:w-[500px] xl:h-[600px]'
         src={profilePic} alt='picture of me priority'/>

        </motion.div>
        
        <div className='ml-5'>

            <p>
                Hi, I am Andre a software Engineer who values learning and growning with people, team and technologies.
            </p>

            <p>
                In the  last 5 years i have worked as a firefighter, in those years i have learned how to work calmly under extreme pressure and work well as a part of a team.
            </p>
        </div>
    
        
    </div>
  )
}

export default About