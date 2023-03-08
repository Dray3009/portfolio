import React from 'react'
import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'

type Props = {directionLeft?: boolean}

const Skill3 = ({directionLeft}: Props) => {
  return (


    <div className='group relative flex cursor-pointer filter hover:grayscale transition duration-300 ease-in-out'>
    <motion.div 
    initial={{
      x: directionLeft ? 200 : -200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
      <SiTailwindcss color='#4dc0b5' size={60}/>
      

    </motion.div>
    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 my-4 '>
          TailwindCSS
        </p>
      </div>
    </div>
     

  </div>
    
  )
}

export default Skill3