/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { EducationIcon, WorkIcon } from '@/icons'

interface ResumeItemProps {
  code: string
  date: string
  title: string
  location: string
  description?: string
  end: boolean
}

export const ResumeItem: React.FC<ResumeItemProps> = ({ code, date, title, location, description, end }): React.ReactNode => {
  return (
    <div className='flex gap-3'>
      <div className='flex flex-col items-center w-fit'>
        <span className='p-2 border border-component-divider rounded-full'>
          {code === 'education' && <EducationIcon style='w-6 h-6 fill-transparent stroke-text-secondary' />}
          {code === 'work' && <WorkIcon style='w-6 h-6 fill-transparent stroke-text-secondary' />}
        </span>
        <span className={`h-full w-px ${end ? 'bg-gradient-to-b from-component-divider' : 'bg-component-divider'}`} />
      </div>
      <div className='flex flex-col pb-6'>
        <span className='py-1 w-fit'>
          <span className='py-1 px-4 text-text-main border border-component-divider rounded-full'>{date}</span>
        </span>
        <div>
          <h5 className='text-xl font-medium text-text-main'>{title}</h5>
          <span className='text-md italic text-text-focus'>{location}</span>
        </div>
        {description !== undefined && <p className='mt-2 text-md text-text-main'>{description}</p>}
      </div>
    </div>
  )
}
