import { SpaceXApiRepositoryInterface } from '../../interfaces'
import { AxiosInstance } from 'axios'

export class SpaceXApiRepository implements SpaceXApiRepositoryInterface {
  constructor(private readonly httpClient: AxiosInstance) {}

  getNextLaunch(): Promise<any> {
    return this.httpClient.get('launches/next')
  }
  getLastLaunch(): Promise<any> {
    return this.httpClient.get('launches/last')
  }
  getUpcomingLaunches(): Promise<any> {
    return this.httpClient.get('launches/upcoming')
  }
  getPastLaunches(): Promise<any> {
    return this.httpClient.get('launches/past')
  }
}
