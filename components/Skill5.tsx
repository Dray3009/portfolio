import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {directionLeft? : boolean}

const Skill5 = ({directionLeft}: Props) => {
  return (

    <div className='group relative flex cursor-pointer hover:grayscale transition duration-300 ease-in-out'>
    <motion.div 
    initial={{
      x: directionLeft ? -200 :200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
    <AiOutlineHtml5 color='#f06529' size={70}/>
      

    </motion.div>

    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 m-6 '>
          Html
        </p>
      </div>
    </div>
     

  </div>
   
  )
}

export default Skill5