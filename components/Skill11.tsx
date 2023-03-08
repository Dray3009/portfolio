import React from 'react'
import { motion } from 'framer-motion'
import {TbBrandReactNative} from 'react-icons/tb'

type Props = {directionLeft? :boolean}

const Skill11 = ({directionLeft}: Props) => {
  return (

    <div className='group relative flex cursor-pointer hover:grayscale transition duration-300 ease-in-out'>
    <motion.div 
    initial={{
      x: directionLeft ? 200 : -200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
    
    <TbBrandReactNative color='	#61DBFB' size={70}/>

    </motion.div>
    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 my-4 '>
          React Native
        </p>
      </div>
    </div>

  </div>
   
  )
}

export default Skill11