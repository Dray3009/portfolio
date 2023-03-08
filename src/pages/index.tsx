import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from './../../components/Header'
import Hero from './../../components/Hero'
import About from 'components/About'
import HireMe from 'components/HireMe'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[#F1F3F4] text-gray-700 h-screen snap-y snap-mandatory overflow-scroll z-0'>
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

      <section id="projects" className='snap-start'>
        <Projects/>

      </section>

      {/* contact me */}

  
      
    </div>
  )
}
