/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use client'

import { UserIcon } from '@/icons'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const UserMenu = (): React.ReactNode => {
  const menuItems = ['About me', 'Resume', 'Contact me']

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='group flex justify-center p-3 bg-button-bg rounded-2xl shadow-btn transition-colors hover:bg-button-hover aria-expanded:bg-button-hover'>
        <UserIcon style='h-7 w-7 fill-text-secondary transition-colors group-hover:fill-text-hover group-aria-expanded:fill-text-hover' />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-150'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute end-0 lg:end-15 top-15 lg:top-0 z-50 mt-0 w-60 origin-top-rigth bg-component-bg rounded-md shadow-btn focus:outline-none'>
          <div className='divide-y divide-component-divider'>
            <h3 className='text-lg text-text-main font-medium px-5 py-4 select-none'>
              Rafael Carvacho <span className='text-text-focus font-normal'>#WEB</span>
            </h3>
            <div className='flex flex-col gap-3 p-5'>
              {
                menuItems.map((item, index) => (
                  <Menu.Item as='div' key={index} className='px-3 py-1 w-full rounded-md text-lg text-start text-text-secondary cursor-pointer transition-colors hover:text-text-hover hover:bg-component-hover'>
                    <span>{item}</span>
                  </Menu.Item>
                ))
              }
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
