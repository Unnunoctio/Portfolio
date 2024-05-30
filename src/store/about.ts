import { atom } from 'nanostores';
import type { About } from '../types';

interface AboutStore {
  last_update: Date
  about: About | null
}

export const aboutStore = atom<AboutStore>({ last_update: new Date(), about: null })

export const updatedAbout = (newAbout: About) => {
  aboutStore.set({ last_update: new Date(), about: newAbout })
}