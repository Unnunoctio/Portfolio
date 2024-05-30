import { atom } from 'nanostores';
import type { Resume } from '../types';

interface ResumeStore {
  last_update: Date
  resumes: Resume[]
}

export const resumeStore = atom<ResumeStore>({ last_update: new Date(), resumes: [] })

export const updatedResumes = (newResumes: Resume[]) => {
  resumeStore.set({ last_update: new Date(), resumes: newResumes })
}