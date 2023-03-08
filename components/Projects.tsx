import React from 'react'
import Image from 'next/image'
import portfolioProject from '../public/portfolioProject.png'
import TravelAppProject from '../public/TravelAppProject.png'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

         <h3 className=' absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl'>
         Projects
         </h3>
         <div className='grid md:gril-col-2 gap-8'></div>

         <div className= 'shadow-xl shadow-gray-700 rounded p-2 group hover:bg-gradient-to-r from-slate-700 to-slate-600'>
            <Image className=' h-40 w-50 rounded-xl group-hover:opacity-10 object-contain'  src={TravelAppProject} alt='/'/>
            
         </div>

         <div 
            className='w-full absolute top[30%] bg-gray-700/10 left-0 h-[500px] -skew-y-12'/>


         
         
    </div>
  )
}

export default Projects