import React from 'react'
import { TbBrandCss3 } from 'react-icons/tb'
import { motion } from 'framer-motion'

type Props = {directionRight? : boolean}

const Skill6 = ({directionRight}: Props) => {
  return (

    <div className='group relative flex cursor-pointer hover:grayscale transition duration-300 ease-in-out '>
    <motion.div 
    initial={{
      x: directionRight ? 200 : -200,
      opacity:0,
    }}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    >
     <TbBrandCss3 color ='	#2965f1' size={70}/>
      

    </motion.div>
     
    <div className='absolute opacity-0 hover:opacity-70 transition duration-300 ease-in-out '>
      <div className='flex items-center justify-center h-full '>
        <p className='text-sm font-bold text-black opacity-100 m-6 '>
          CSS
        </p>
      </div>
    </div>

  </div>
   
  )
}

export default Skill6