import React from 'react'
import { motion } from 'framer-motion'
import { FaNodeJs } from 'react-icons/fa'

type Props = {directionLeft? : boolean}

const skill9 = ({directionLeft}: Props) => {
  return (
    
    <div className='group relative flex cursor-pointer hover:grayscale transition duration-300 ease-in-out'>
    <motion.div 
    initial={{
      x: directionLeft ? -200 : 200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
      <FaNodeJs size={60} color={'#6CC24A'}/>
      

    </motion.div>
     
    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 my-4 '>
          Nodejs
        </p>
      </div>
    </div>

  </div>
  )
}

export default skill9