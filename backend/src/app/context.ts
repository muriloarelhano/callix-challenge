import { Context } from '../interfaces'
import { httpClient } from './axios'
import { SpaceXApiRepository } from './repositories'

export const ctx: Context = {
  repository: {
    spaceXApi: new SpaceXApiRepository(httpClient),
  },
}
