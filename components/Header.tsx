import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {SiGmail} from 'react-icons/si'
import { motion } from 'framer-motion'


type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}

        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}

        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center'>
              {/* icon */}
              <SocialIcon url='https://www.linkedin.com/in/andre-vassell-a5697421a/'
              fgColor='#1b1b1b' bgColor='transparent'/>

              <SocialIcon url='https://github.com/Dray3009'
              fgColor='#1b1b1b' bgColor='transparent'/>

            



        </motion.div>

        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5

        }}
        animate ={{
            x:0,
            opacity:1,
            scale:1,

        }}

        transition={{
            duration:2.5

        }}

         className='flex flex-row items-center cursor-pointer p-3'>
            <a href='mailto:andrevassell89@gmail.com'>
            <SiGmail color='#EA4335' size={24}/>
            </a>
       
            

              <p className=' uppercase hidden md:inline-flex text-xl text-gray-700 font-semibold ml-2 tracking-wide'>
               Gmail Me
             </p>


           
            
            
        
      

        </motion.div>

        


    </header>
  )
}

export default Header