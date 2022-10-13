import { SpaceXApiResponse } from '../../interfaces/Responses'
import BaseService from './BaseService'

export class SpaceXApiService extends BaseService {
  getNextLaunch(): Promise<SpaceXApiResponse> {
    return this.repository.spaceXApi.getNextLaunch()
  }
  getLastLaunch(): Promise<SpaceXApiResponse> {
    return this.repository.spaceXApi.getLastLaunch()
  }
  getUpcomingLaunches(): Promise<SpaceXApiResponse[]> {
    return this.repository.spaceXApi.getUpcomingLaunches()
  }
  getPastLaunches(): Promise<SpaceXApiResponse[]> {
    return this.repository.spaceXApi.getPastLaunches()
  }
}
