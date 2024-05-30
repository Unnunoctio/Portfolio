import { atom } from 'nanostores';
import type { Contact } from '../types';

interface ContactStore {
  last_update: Date
  contacts: Contact[]
}

export const contactStore = atom<ContactStore>({ last_update: new Date(), contacts: [] })

export const updatedContacts = (newContacts: Contact[]) => {
  contactStore.set({ last_update: new Date(), contacts: newContacts })
}