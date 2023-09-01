import { ResumeItem } from './ResumeItem'

interface IResumeItem {
  code: string
  date: string
  title: string
  location: string
  description?: string
}

interface ResumeListProps {
  items: IResumeItem[]
  style: string
}

export const ResumeList: React.FC<ResumeListProps> = ({ items, style }): React.ReactNode => {
  return (
    <div className={style}>
      {items.map((item, index) => (
        <ResumeItem
          key={index}
          code={item.code}
          date={item.date}
          title={item.title}
          location={item.location}
          description={item.description}
          end={index === items.length - 1}
        />
      ))}
    </div>
  )
}
