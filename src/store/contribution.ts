import { atom } from 'nanostores';
import type { GithubContributions } from 'github-calendar-json';

interface ContributionStore {
  last_update: Date
  contributions: GithubContributions | null
}

export const contributionStore = atom<ContributionStore>({
  last_update: new Date(),
  contributions: null,
});

export const updatedContribution = (newContributions: GithubContributions) => {
  contributionStore.set({
    last_update: new Date(),
    contributions: newContributions,
  })
}