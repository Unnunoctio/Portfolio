import skills from '@/public/skills.json'
import { SkillBadge } from './SkillBadge'

export const SkillList = (): React.ReactNode => {
  return (
    <ul className='flex flex-wrap gap-3 mt-4'>
      {skills.map((skill, index) => (
        <li key={index}>
          <SkillBadge {...skill} />
        </li>
      ))}
    </ul>
  )
}
