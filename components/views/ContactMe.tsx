'use client'

import { useEffect, useState } from 'react'
import { Modal } from './Modal'

export const ContactMe = ({ onResetView }: { onResetView: () => void }): React.ReactNode => {
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
      <h2 className='text-4xl font-medium text-center md:text-start'>Contact me</h2>
      <div className='flex flex-col mt-8 py-8 min-h-[50vh]'>
        <h3 className='text-xl md:text-2xl font-medium'>Let's Talk :</h3>
        <div className='flex flex-col gap-4 mt-4 pl-2 md:pl-4 text-md sm:text-lg md:text-xl'>
          <div className='flex flex-wrap gap-x-2'>
            <p>Email {'>'}</p>
            <a className='text-text-focus hover:underline' href='mailto:rafael.carvacho.p@gmail.com' target='_blank' rel='noreferrer'>rafael.carvacho.p@gmail.com</a>
          </div>
          <div className='flex flex-wrap gap-x-2'>
            <p>LinkedIn {'>'}</p>
            <a className='text-text-focus hover:underline' href='https://www.linkedin.com/in/rafael-carvacho-389515265' target='_blank' rel='noreferrer'>linkedin.com/in/rafael-carvacho</a>
          </div>
          <div className='flex flex-wrap gap-x-2'>
            <p>GitHub {'>'}</p>
            <a className='text-text-focus hover:underline' href='https://github.com/unnunoctio' target='_blank' rel='noreferrer'>github.com/Unnunoctio</a>
          </div>
          <div className='flex flex-wrap gap-x-2'>
            <p>Website {'>'}</p>
            <a className='text-text-focus hover:underline' href='https://unnunoctio-dev.vercel.app' target='_blank' rel='noreferrer'>unnunoctio-dev.vercel.app</a>
          </div>
        </div>
      </div>
    </Modal>
  )
}
