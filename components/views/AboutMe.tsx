'use client'

import { useEffect, useState } from 'react'
import { Modal } from './Modal'
import Image from 'next/image'

export const AboutMe = ({ onResetView }: { onResetView: () => void }): React.ReactNode => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const onClose = (): void => {
    setIsOpen(false)
    setTimeout(() => {
      onResetView()
    }, 200)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className='text-4xl font-medium text-center md:text-start'>About me</h2>
      <div className='flex items-center mt-8 min-h-[50vh]'>
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <div className='flex justify-center items-center'>
            <Image src='/user.jpg' alt='User' width={500} height={500} className='w-72 md:w-80 aspect-square object-cover rounded-full' />
          </div>
          <div className='flex flex-col gap-8 lg:max-w-[60%]'>
            <div>
              <h3 className='text-2xl sm:text-3xl font-medium'>I'm Rafael Carvacho</h3>
              <h5 className='text-xl sm:text-2xl italic text-text-focus'>Web Developer & Software Developer</h5>
            </div>
            <div className='text-md sm:text-lg'>
              <p>
                I am a passionate software developer with experience in various projects, ranging from web applications to desktop software. I am constantly seeking opportunities to improve my skills and knowledge, staying up-to-date with the latest technologies and trends in the field. Outside of my professional endeavors, I dedicate time to personal projects and actively participate in development communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
