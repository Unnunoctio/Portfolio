/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { githubContributions } from 'github-calendar-json'

interface HeaderMonth {
  month?: string
  cols: number
}

const getHeaderMonths = (months: string[]): HeaderMonth[] => {
  const headers: HeaderMonth[] = months.reduce((acc: HeaderMonth[], month, index) => {
    if (index === 0 || month !== months[index - 1]) {
      acc.push({ month, cols: 1 })
    } else {
      acc[acc.length - 1].cols++
    }
    return acc
  }, [])

  console.log(headers)

  return headers
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GithubCalendar = async () => {
  const contributions = await githubContributions('Unnunoctio', { cache: 'no-cache' })
  const headerDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const headerMonths = getHeaderMonths(contributions.calendar[0].map((col) => col?.date.toLocaleString('en-US', { month: 'short' })) as string[])

  return (
    <section>
      <div className='flex justify-center mt-12 w-full h-fit'>
        <div className='overflow-x-auto p-2'>
          <div className='min-w-[900px] w-[900px]'>
            <table className='border-separate border-spacing-[4px]'>
              <thead>
                <tr>
                  <td className='w-[30px]' />
                  {headerMonths.map((header, index) => (
                    <td key={index} className='contribution-calendar-label' colSpan={header.cols}>
                      <span className='text-[14px]'>{header.month}</span>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contributions.calendar.map((days, index) => (
                  <tr key={index} className='h-[12px]'>
                    <td className='relative w-[30px]'>
                      {index % 2 === 1 && (
                        <span className='absolute -bottom-[5px] text-[14px]'>
                          {headerDays[index]}
                        </span>
                      )}
                    </td>
                    {days.map((day, index) => (
                      (day != null) && (
                        <td
                          key={index} className={'contribution-calendar-label w-[12px] rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border ' +
                          (
                            (day.level === 0 ? 'bg-calendar-0' : '') ||
                            (day.level === 1 ? 'bg-calendar-1' : '') ||
                            (day.level === 2 ? 'bg-calendar-2' : '') ||
                            (day.level === 3 ? 'bg-calendar-3' : '') ||
                            (day.level === 4 ? 'bg-calendar-4' : '')
                          )}
                        />
                      )
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-2'>
        <div className='flex gap-1 md:gap-2 justify-between w-full max-w-[902px]'>
          <p className='text-[14px] md:text-[16px]'>{contributions.totalContributions} contributions in the last year</p>
          <div className='flex items-center gap-[2px] md:gap-1'>
            <span className='text-[14px]'>Less</span>
            <span className='w-[12px] h-[12px] bg-calendar-0 rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border' />
            <span className='w-[12px] h-[12px] bg-calendar-1 rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border' />
            <span className='w-[12px] h-[12px] bg-calendar-2 rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border' />
            <span className='w-[12px] h-[12px] bg-calendar-3 rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border' />
            <span className='w-[12px] h-[12px] bg-calendar-4 rounded-[2px] outline outline-1 -outline-offset-1 outline-calendar-border' />
            <span className='text-[14px]'>More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
