'use client'

import { ForkIcon, GitHubIcon, LinkIcon, StarIcon, WatcherIcon } from '@/icons'
import { SkillBadge } from '../skills/SkillBadge'
import { Modal } from '../views/Modal'
import skills from '@/public/skills.json'
import { MediaButton } from '../buttons'
import { ProjectLogo } from './ProjectLogo'

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

interface ProjectViewProps {
  isOpen: boolean
  onClose: () => void
  project: IProject
}

export const ProjectView: React.FC<ProjectViewProps> = ({ isOpen, onClose, project }) => {
  const { id, title, skillsCode, description, github, website } = project

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex items-center gap-3'>
        <ProjectLogo logoId={id} style='hidden md:block fill-text-main' />
        <h2 className='text-3xl md:text-4xl font-medium text-center md:text-start w-full'>{title}</h2>
      </div>
      <div className='flex flex-col justify-between gap-8 mt-8 md:mt-12 min-h-[50vh]'>
        <div className='flex flex-col gap-6'>
          {/* Skill set */}
          <div>
            <h3 className='text-xl md:text-2xl font-medium'>Skill Set</h3>
            <ul className='flex flex-wrap gap-3 py-2'>
              {skillsCode.map(code => skills.find(skill => skill.code === code)).map((skill, index) => (
                <li key={index}>
                  <SkillBadge code={skill?.code as string} name={skill?.name as string} />
                </li>
              ))}
            </ul>
          </div>
          {/* Description */}
          <div className='md:max-w-[60%]'>
            <h3 className='text-xl md:text-2xl font-medium'>Description</h3>
            <p className='text-md py-2'>{description}</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between gap-5 text-text-secondary'>
          {/* Github */}
          <div className='flex justify-between items-end max-w-[150px] w-full'>
            <span className='flex items-center gap-2'>
              <StarIcon style='w-5 h-5 fill-text-secondary' />
              {github.stars}
            </span>
            <span className='flex items-center gap-2'>
              <ForkIcon style='w-5 h-5 fill-text-secondary' />
              {github.forks}
            </span>
            <span className='flex items-center gap-2'>
              <WatcherIcon style='w-5 h-5 fill-text-secondary' />
              {github.watchers}
            </span>
          </div>
          {/* Links */}
          <div className='flex flex-row-reverse justify-around sm:justify-between pb-2 sm:pb-0 max-w-full sm:max-w-[200px] w-full'>
            <MediaButton href={github.url} style='px-2.5 rounded-lg'>
              <GitHubIcon style='w-7 h-7 fill-text-secondary' />
            </MediaButton>

            {website !== null && (
              <MediaButton href={website} style='px-2.5 rounded-lg'>
                <LinkIcon style='w-7 h-7 fill-text-secondary' />
              </MediaButton>
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}
