import React from 'react'
import Image from 'next/image'
import HomeScreen from '../public/HomeScreen.png'
import Regscreen from '../public/Regscreen.png'
import SignInScreen from '../public/SignInScreen.png'
import PopularScreen from '../public/PopularScreen.png'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div className= 'h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
         

         
         <h3 className='top-24 absolute uppercase tracking-[10px] text-gray-500 text-2xl'>
         Projects
         </h3>
         <div className='absolute top-40 m-2'>
         <h1 className='text-gray-500 mb-4 text-3xl tracking-wide text-left'>
          Travel App
         </h1>
        

         
         <p className='md:text-sm lg:text-lg font-light text-left mb-4'>
         Travel App which was inspire from a ux designer from dribble. 
          The app allows users to explore cities in Indonesia where they visit whilst travelling. 
         </p>
    
      

         <h3 className='text-left text-gray-500 text-2xl mb-4 tracking-wider'>
          Stack
         </h3>




         <div className='flex flex-wrap'>
          <span className='bg-gray-800 rounded-sm text-sm text-white mr-2 px-2 py-1'> React Native</span>
          <span className='bg-[#61DBFB] rounded-sm text-sm text-white mr-2 px-2 py-1'> React</span>
          <span className='bg-[#f0db4f] rounded-sm text-sm text-white mr-2 px-2 py-1'> Javascript</span>

         </div>

         <h3 className='text-left text-gray-500 text-2xl mb-4 tracking-wider pt-4'>
          Deploypments
         </h3>

         <div className='flex flex-wrap'>
          <span className='bg-gray-800 rounded-sm text-sm text-white mr-2 px-2 py-1'> web</span>
          <span className='bg-[#dd5f28] rounded-sm text-sm text-white mr-2 px-2 py-1'> ios</span>
          <span className='bg-[#add827] rounded-sm text-sm text-white mr-2 px-2 py-1'> android</span>

          </div>

          <h3 className='text-left text-gray-500 text-2xl mb-4 tracking-wider pt-4'>
          Screenshots
         </h3>

         

         <div className='w-full rounded-sm flex flex-row items-center space-x-4 p-4 snap-center snap-x snap-mandatory overflow-x-scroll bg-[#dddee0] overflow-y-hidden'>
        <div className='flex snap-mandatory flex-shrink-0 space-x-2'>
        <Image className='h-[450px] w-[220px] rounded-xl'
         src={HomeScreen} alt=''/>
        

         <Image className='h-[450px] w-[220px] rounded-xl'
         src={Regscreen} alt=''/>


         <Image className='h-[450px] w-[220px] rounded-xl'
         src={SignInScreen} alt=''/>

         <Image className='h-[450px] w-[220px] rounded-xl'
         src={PopularScreen} alt=''/>

         <Image className='h-[450px] w-[220px] rounded-xl'
         src={PopularScreen} alt=''/>


        </div>
         

        
          

         </div>


         </div> 

         

        
         

         {/* <p className='p-5 text-gray-600 m-4 mb:text-sm md:text-xl'>
          Travel App which was inspire from a ux designer from dribble. 
          The app allows users to explore cities in Indonesia where they visit whilst travelling.
         </p> */}
         

         
         

        

         
         
    </div>
  )
}

export default Projects