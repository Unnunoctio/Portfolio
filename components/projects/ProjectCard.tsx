'use client'

import Image from 'next/image'
import { ProjectLogo } from './ProjectLogo'
import { useState } from 'react'
import { ProjectView } from './ProjectView'

interface IGithub {
  url: string
  stars: number
  forks: number
  watchers: number
}

interface IProject {
  order: number
  id: number
  title: string
  website: string
  github: IGithub
  skillsCode: string[]
  description: string
  image: string
}

export const ProjectCard = ({ project }: { project: IProject }): React.ReactNode => {
  const { image, title, id } = project
  const [isOpen, setIsOpen] = useState(false)

  const onClose = (): void => {
    setIsOpen(false)
  }

  return (
    <>
      <section onClick={() => setIsOpen(true)} className='card group relative w-full max-w-[400px] cursor-pointer'>
        <div className={`absolute inset-0 w-full h-[250px] rounded-full transition-all duration-300 group-hover:shadow-card group-hover:animate-card-pulse group-hover:animate-card-shadow-pulse ${isOpen ? 'shadow-card' : ''}`} />
        <div className={`relative overflow-hidden flex flex-col w-full h-[250px] bg-bg-project rounded-lg outline outline-offset-4 outline-4 outline-transparent transition-all duration-300 group-hover:animate-card-pulse group-hover:outline-card-outline ${isOpen ? 'outline-card-outline' : ''}`}>
          <Image src={image} alt={title} width={450} height={280} className='object-cover w-full h-full' />
        </div>
        <div className='flex items-center gap-2 px-1 mt-3 min-h-[36px]'>
          <ProjectLogo logoId={id} style='fill-text-main' />
          <h3 className='text-2xl font-medium'>{title}</h3>
        </div>
      </section>

      <ProjectView isOpen={isOpen} onClose={onClose} project={project} />
    </>
  )
}
