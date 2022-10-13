import { Router } from 'express'
import { ExpressAdapter } from '../../../adapters/ExpressAdapter'
import { SpaceXApiController } from '../../../controllers/SpaceXAPIController'
import { SpaceXApiService } from '../../../domain/services/SpaceXApiService'
import { Context } from '../../../interfaces'

const router = Router()

export default ({ repository }: Context) => {
  const spaceXApiController = new SpaceXApiController(repository, new SpaceXApiService(repository))

  router.get('/launches/last', ExpressAdapter.perform(spaceXApiController.getLastLaunch.bind(spaceXApiController)))
  router.get('/launches/next', ExpressAdapter.perform(spaceXApiController.getNextLaunch.bind(spaceXApiController)))
  router.get(
    '/launches/upcoming',
    ExpressAdapter.perform(spaceXApiController.getUpcomingLaunches.bind(spaceXApiController))
  )
  router.get('/launches/past', ExpressAdapter.perform(spaceXApiController.getPastLaunches.bind(spaceXApiController)))

  return router
}
