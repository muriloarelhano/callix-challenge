import { SpaceXApiRepositoryInterface } from './Repository'

export interface Context {
  repository: {
    welcome: SpaceXApiRepositoryInterface
  }
}
