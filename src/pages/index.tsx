import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from './../../components/Header'
import Hero from './../../components/Hero'
import About from 'components/About'
import HireMe from 'components/HireMe'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#F1F3F4] text-gray-700 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-slate-500 scrollbar-thin z-0'>
      <Head>
        <title>Andre Vassell</title>
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
      <Hero/>

      </section>
   

      
      <section id="about" className='snap-center'>
        <About/>

      </section>

    
      <section id= "hireme" className='snap-center'>
        <HireMe/>
        </section>

        <section id= "skills" className='snap-start'>
        <Skills/>

      </section>

      {/* projects */}

      <section id="projects" className='snap-center'>
        <Projects/>

      </section>

      {/* contact me */}

      <section id='contact' className='snap-start'>
        <ContactMe/>

      </section>

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className=' flex items-center justify-center'>
          <Image className='h-10 w-10 hover:bg-slate-500 rounded-full' src={logo} alt=''/>

        </div>

      </footer>
      </Link>

  
      
    </div>
  )
}
