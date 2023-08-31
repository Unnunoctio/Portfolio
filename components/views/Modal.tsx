import { XMarkIcon } from '@/icons'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-component-bg bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto z-10 py-4 sm:py-6 md:py-8 lg:py-10'>
          <div className='flex justify-center pt-15 px-2 sm:px-6 md:px-8 lg:px-10'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative overflow-hidden z-30 py-4 sm:py-8 md:py-12 px-4 sm:px-8 md:px-12 w-full max-w-6xl bg-red-500 rounded-lg shadow-xl transition-transform transform'>
                <button
                  onClick={onClose}
                  className='group absolute top-3 sm:top-4 right-3 sm:right-4 flex justify-center p-1.5 bg-button-bg rounded-md transition-colors hover:bg-button-hover'
                >
                  <XMarkIcon style='h-6 w-6 fill-text-secondary transition-colors group-hover:fill-text-hover' />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
