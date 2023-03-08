import React from 'react'
import { motion } from 'framer-motion'
import {FaReact} from 'react-icons/fa'

type Props = {directionRight? : boolean;
};

const Skill = ({directionRight}: Props) => {
  return (
    <div className='group relative flex cursor-pointer filter hover:grayscale transition duration-300 ease-in-out'>
      <motion.div 
      initial={{
        x: directionRight ? -200 :200,
        opacity:0,
      }}
      transition={{duration:1}}
      whileInView={{opacity:1, x:0}}
      >
        <FaReact color='#61DBFB' size={60}/>
        

      </motion.div>

      <div className='absolute opacity-0 hover:opacity-100 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 my-4'>
          ReactJs
        </p>
      </div>
    </div>
       

    </div>
    
  )
}

export default Skill