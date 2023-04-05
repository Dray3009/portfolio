import React from 'react'
import { RoughNotation,RoughNotationGroup } from 'react-rough-notation'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";



type Inputs = {
    name: string,
    email: string,
    subject:string
    message:string
  };

type Props = {}

const ContactMe = (props: Props) => {


  const { register, 
    handleSubmit,  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {window.location.href =`mailto:andrevassell89@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`;
};
  return (

    <div className='h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10  justify-center items-center'>
            <p className='text-lg text-center sm:text-left '>
                Do you have a project in mind ? Want to hire me ? or simply wanna chat ?
          
                

            </p>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-slate-500 h-7 w-7 animate-pulse'/>
                <p className='text-xl'>+447554006954</p>

                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-slate-500 h-7 w-7 animate-pulse'/>
                <p className='text-xl'>andrevassell89@gmail.com</p>

                </div>

                

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-slate-500 h-7 w-7 animate-pulse'/>
                <p className='text-xl'>United Kingdom, Leeds</p>

                </div>
            


            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-fit'>
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

             

                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type='text'/>
                    <input {...register('email')} placeholder='Email' className= 'contactInput' type='email'/>
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type='text'/>

                <textarea {...register('message')} placeholder='Message' className='contactInput'/>

                <button  type='submit' className='bg-slate-500 py-5 rounded-md text-black/50 font-bold text-lg'>
                    Submit
                </button>
                </div>

            </form>
           
        </div>
       
        
        </div>
  )
}

export default ContactMe