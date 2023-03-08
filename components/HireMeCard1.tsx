import React from 'react'
import { motion } from 'framer-motion'
import target from 'public/target.svg'
import Image from 'next/image'

type Props = {}

const HireMeCard1 = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
    snap-center bg-[#dddee0] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div initial={{
            y:-100,
            opacity:0,

        }}

        transition={{
            duration:1.2,
        }}
            whileInView={{
                opacity:1, y:0
            }}

            viewport={{
                once:true
            }}

    
        >
        <Image className='w-32 h-32 rounded-md xl:w-[200px] xl:h-[200] object-center' src={target} alt='target svg priporty'/>

        </motion.div>

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light ml-32'>
                Target

            </h4>

            <ul className='list-disc space-y-4 ml-5 text-lg mt-2'>
                <li> Continue learning </li>
                <li> growth mindset</li>
                <li> continous devlopment</li>
                <li> Summmary summary summary summary</li>
            </ul>

            
        </div>

        
    
        


        
        
    
    </article>
  )
}

export default HireMeCard1