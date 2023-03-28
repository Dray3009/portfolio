import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {SiGmail} from 'react-icons/si'
import {DocumentTextIcon} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'


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
        className='flex flex-row items-center space-x-6 cursor-pointer'>
              {/* icon */}
              <SocialIcon url='https://www.linkedin.com/in/andre-vassell-a5697421a/'
              fgColor='#1b1b1b' bgColor='transparent'/>

              <SocialIcon url='https://github.com/Dray3009'
              fgColor='#1b1b1b' bgColor='transparent'/>

              <Link href="./Andre_Vassell_Resume.pdf" 
                target="blank">
              <DocumentTextIcon className=' w-6 h-6 animate-bounce'/>
            
              </Link>

              

              


                 

              


            



        </motion.div>

        <Link href='#contact'>

        

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
            
            <SiGmail color='#EA4335' size={24}/>
       
            

              <p className=' uppercase hidden md:inline-flex text-xl text-gray-700 font-semibold ml-2 tracking-wide'>
               Gmail Me
             </p>


           
            
            
        
      

        </motion.div>

        </Link>

        


    </header>
  )
}

export default Header