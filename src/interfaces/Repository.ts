export interface SpaceXApiRepositoryInterface {
  getNextLaunch(): Promise<any>
  getLastLaunch(): Promise<any>
  getUpcomingLaunches(): Promise<any>
  getPastLaunches(): Promise<any>
}
