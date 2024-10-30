import { makeAutoObservable } from 'mobx';

import { TRepository } from 'shared/types/repository';

class RepositoryStore {
  repositories: TRepository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setRepositoryData(data: TRepository[]) {
    this.repositories = data;
  }
}

export const repositoryStore = new RepositoryStore();
