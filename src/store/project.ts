import { atom } from 'nanostores';
import type { GithubData, Project, ProjectComplete, Skill } from '../types';

interface ProjectStore {
  last_update: Date
  projects: ProjectComplete[]
}

export const projectStore = atom<ProjectStore>({
  last_update: new Date(),
  projects: []
});

export const updatedProjects = (newProjects: Project[]) => {
  const updProjects = newProjects.map(project => {
    const pStore = projectStore.get().projects.find(p => p.path === project.path)
    return {
      ...project,
      skills: pStore?.skills ?? [],
      github: pStore?.github ?? null
    } as ProjectComplete
  })
  
  projectStore.set({ last_update: new Date(), projects: updProjects })
}

export const getProject = (path: string) => projectStore.get().projects.find(p => p.path === path)

export const updateGithubProject = (path: string, newData: GithubData) => {
  const updProjects = projectStore.get().projects.map(project => {
    if (project.path === path) {
      return { ...project, github: newData }
    }
    return project
  })

  projectStore.set({ last_update: projectStore.get().last_update, projects: updProjects })
}

export const updateSkillsProject = (path: string, newSkills: Skill[]) => {
  const updProjects = projectStore.get().projects.map(project => {
    if (project.path === path) {
      return { ...project, skills: newSkills }
    }
    return project
  })

  projectStore.set({ last_update: projectStore.get().last_update, projects: updProjects })
}