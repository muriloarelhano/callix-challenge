import { Context } from 'vm'
import { SpaceXApiResponse } from '../interfaces/Responses'
import { SpaceXApiService } from '../domain/services/SpaceXApiService'
import BaseController from './BaseController'

export class SpaceXApiController extends BaseController {
  constructor(repository: Context['repository'], private readonly spaceXApiService: SpaceXApiService) {
    super(repository)
  }
  getNextLaunch(): Promise<SpaceXApiResponse> {
    return this.spaceXApiService.getNextLaunch()
  }
  getLastLaunch(): Promise<SpaceXApiResponse> {
    return this.spaceXApiService.getLastLaunch()
  }
  getUpcomingLaunches(): Promise<SpaceXApiResponse[]> {
    return this.spaceXApiService.getUpcomingLaunches()
  }
  getPastLaunches(): Promise<SpaceXApiResponse[]> {
    return this.spaceXApiService.getPastLaunches()
  }
}
