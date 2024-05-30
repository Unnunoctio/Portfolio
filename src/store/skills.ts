import { atom } from 'nanostores';
import type { Skill } from '../types';

interface SkillStore {
  last_update: Date
  skills: Skill[]
}

export const skillStore = atom<SkillStore>({ last_update: new Date(), skills: [] })

export const updatedSkills = (newSkills: Skill[]) => {
  skillStore.set({ last_update: new Date(), skills: newSkills })
}