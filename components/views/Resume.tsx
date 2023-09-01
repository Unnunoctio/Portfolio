'use client'

import resumeList from '@/public/resumeList.json'
import { useEffect, useState } from 'react'
import { Modal } from './Modal'
import { ResumeList } from '../resumen'

export const Resume = ({ onResetView }: { onResetView: () => void }): React.ReactNode => {
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
      <h2 className='text-4xl font-medium text-center md:text-start'>Work & Education</h2>
      <div className='flex items-center mt-8 min-h-[50vh]'>
        <div className='flex justify-between gap-8'>
          <ResumeList
            items={resumeList.filter(item => item.code === 'work')}
            style='hidden md:block md:max-w-[47%]'
          />
          <ResumeList
            items={resumeList.filter(item => item.code === 'education')}
            style='hidden md:block md:max-w-[47%]'
          />
          <ResumeList
            items={resumeList}
            style='block md:hidden'
          />
        </div>
      </div>
    </Modal>
  )
}
