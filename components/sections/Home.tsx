import Image from 'next/image'
import { SkillList } from '../skills'
import { MediaButton } from '../buttons'
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '@/icons'
import { TypeAndDelete } from '../texts'

export const Home = (): React.ReactNode => {
  return (
    <section id='home' className='flex flex-col items-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 w-full max-w-page-container'>
      {/* LOGO */}
      <div className='flex justify-center'>
        <div className='flex items-center gap-2 h-13'>
          <Image src='/logo.svg' alt='logo' width={72} height={45} priority />
          <span className='hidden sm:flex flex-col justify-center'>
            <span className='text-2xl font-medium leading-none'>Rafael</span>
            <span className='text-2xl font-medium leading-none'>Carvacho</span>
          </span>
        </div>
      </div>

      {/* BODY */}
      <div className='w-full mt-24 pb-14 px-page'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl sm:text-6xl'>Rafael Carvacho</h1>
          <TypeAndDelete texts={['Software Developer.', 'Web Developer.', 'Gamer.']} style='text-2xl sm:text-3xl italic text-text-focus' />
        </div>

        <div className='mt-16 p-4 w-full max-w-[450px] bg-skill-bg rounded-2xl shadow-skill-box'>
          <h2 className='text-2xl'>Skill Set</h2>
          <SkillList />
        </div>

        <div className='flex flex-wrap gap-4 mt-12'>
          <MediaButton href='https://github.com/Unnunoctio' ariaLabel='My GitHub' style='group flex gap-2'>
            <GitHubIcon style='w-7 h-7 fill-text-secondary transition-colors group-hover:fill-text-hover' />
            Github
          </MediaButton>
          <MediaButton href='https://www.linkedin.com/in/rafael-carvacho-389515265' ariaLabel='My LinkedIn' style='group flex gap-2'>
            <LinkedInIcon style='w-7 h-7 fill-text-secondary transition-colors group-hover:fill-text-hover' />
            LinkedIn
          </MediaButton>
          <MediaButton href='/rafael_carvacho_cv.pdf' ariaLabel='My Resume' style='group flex gap-2'>
            <DownloadIcon style='w-7 h-7 fill-text-secondary transition-colors group-hover:fill-text-hover' />
            Download CV
          </MediaButton>
        </div>
      </div>
    </section>
  )
}
