import { SpaceXApiRepositoryInterface } from '../../interfaces'
import { AxiosInstance } from 'axios'
import { SpaceXApiResponse } from '../../interfaces/Responses'

export class SpaceXApiRepository implements SpaceXApiRepositoryInterface {
  constructor(private readonly httpClient: AxiosInstance) {}

  getNextLaunch(): Promise<SpaceXApiResponse> {
    return this.httpClient.get('launches/next')
  }
  getLastLaunch(): Promise<SpaceXApiResponse> {
    return this.httpClient.get('launches/last')
  }
  getUpcomingLaunches(): Promise<SpaceXApiResponse[]> {
    return this.httpClient.get('launches/upcoming')
  }
  getPastLaunches(): Promise<SpaceXApiResponse[]> {
    return this.httpClient.get('launches/past')
  }
}
