import { AxiosInstance } from 'axios'
import { SpaceXApiRepositoryInterface } from '../../interfaces'
import { SpaceXApiResponse } from '../../interfaces/Responses'

export class SpaceXApiRepository implements SpaceXApiRepositoryInterface {
  constructor(private readonly httpClient: AxiosInstance) {}

  async getNextLaunch(): Promise<SpaceXApiResponse> {
    return (await this.httpClient.get('launches/next')).data
  }
  async getLastLaunch(): Promise<SpaceXApiResponse> {
    return (await this.httpClient.get('launches/latest')).data
  }
  async getUpcomingLaunches(): Promise<SpaceXApiResponse[]> {
    return (await this.httpClient.get('launches/upcoming')).data
  }
  async getPastLaunches(): Promise<SpaceXApiResponse[]> {
    return (await this.httpClient.get('launches/past')).data
  }
}
