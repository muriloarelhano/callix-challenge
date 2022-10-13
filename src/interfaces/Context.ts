import { SpaceXApiRepositoryInterface } from './Repository'

export interface Context {
  repository: {
    spaceXApi: SpaceXApiRepositoryInterface
  }
}
