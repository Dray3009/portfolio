import React from 'react'
import { motion } from 'framer-motion'
import HireMeCard from './HireMeCard'
import HireMeCard1 from './HireMeCard1'
import HireMeCard2 from './HireMeCard2'

type Props = {}

const HireMe = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>
            Why Hire Me 
        </h3>
        <div className='w-full flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll'>
            <HireMeCard/>
            <HireMeCard1/>
            <HireMeCard2/>
            
            
            
            {/* hire me card */}
            {/* hire me card */}
            {/* hire me card */}
            {/* hire me card */}
        </div>

    </motion.div>
  )
}

export default HireMe