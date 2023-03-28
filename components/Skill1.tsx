import React from 'react'
import {IoLogoJavascript } from 'react-icons/io'
import{motion} from 'framer-motion'

type Props = {directionLeft?: boolean}

const Skill1 = ({directionLeft}: Props) => {
  return (
    
    <div className='group relative flex cursor-pointer filter hover:grayscale transition duration-300 ease-in-out'>
    <motion.div 
    initial={{
      x: directionLeft ? -200 :200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
      <IoLogoJavascript color='#f0db4f' size={60}/>
      

    </motion.div>
    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 my-5'>
          JavaScript
        </p>
      </div>
    </div>
     

  </div>
  )
}

export default Skill1