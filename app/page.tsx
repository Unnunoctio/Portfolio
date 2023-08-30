import { Home, Navbar } from '@/components/sections'

export default function Index (): React.ReactNode {
  return (
    <main className='flex flex-col items-center text-text-main'>
      <Navbar />
      <Home />
    </main>
  )
}
