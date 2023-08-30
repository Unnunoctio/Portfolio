import { Home, Navbar } from '@/components/sections'
import { Projects } from '@/components/sections/Projects'

export default function Index (): React.ReactNode {
  return (
    <main className='flex flex-col items-center text-text-main'>
      <Navbar />
      <Home />
      <Projects />
    </main>
  )
}
