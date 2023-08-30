import Image from 'next/image'
import { SkillList } from '../skills'

export const Home = (): React.ReactNode => {
  return (
    <section id='home' className='flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 w-full max-w-page-container'>
      {/* LOGO */}
      <div className='flex justify-center'>
        <div className='flex items-center gap-2 h-13'>
          <Image src='/logo.svg' alt='logo' width={80} height={50} priority />
          <span className='hidden sm:flex flex-col justify-center'>
            <span className='text-2xl font-medium leading-none'>Rafael</span>
            <span className='text-2xl font-medium leading-none'>Carvacho</span>
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className='w-full mt-24 mb-14 px-page'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl sm:text-6xl'>Rafael Carvacho</h1>
          {/* Typewriter */}
        </div>

        <div className='mt-16 p-4 w-full max-w-[450px] bg-skill-bg rounded-2xl shadow-skill-box'>
          <h2 className='text-2xl'>Skill Set</h2>
          <SkillList />
        </div>

        <div className='flex flex-wrap gap-4 mt-12'>
          {/* Buttons */}
        </div>
      </div>
    </section>
  )
}
