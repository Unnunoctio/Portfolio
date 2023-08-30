import { UserMenu } from '../buttons'

export const Navbar = (): React.ReactNode => {
  return (
    <nav className='fixed top-4 sm:top-6 md:top-8 lg:top-10 z-30 w-full max-w-nav-container'>
      <div className='flex justify-end px-4 sm:px-6 md:px-8 lg:px-10'>
        <UserMenu />
      </div>
    </nav>
  )
}
