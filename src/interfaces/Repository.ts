import { SpaceXApiResponse } from './Responses'

export interface SpaceXApiRepositoryInterface {
  getNextLaunch(): Promise<SpaceXApiResponse>
  getLastLaunch(): Promise<SpaceXApiResponse>
  getUpcomingLaunches(): Promise<SpaceXApiResponse[]>
  getPastLaunches(): Promise<SpaceXApiResponse[]>
}
