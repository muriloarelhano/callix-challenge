import RedisMock from 'redis-mock'
import { RCache } from '@climatempo/mjolnir'

import { FakeWelcomeRepository } from '../src/app/repositories'

const logger: any = (xRequestId: string, path: string, params: any) => ({
  error: (exception: Error) => global.console.log(exception, xRequestId, path, params),
  log: (message: string) => global.console.log(message, xRequestId, path, params),
})

const ctx: any = {
  repository: {
    welcome: new FakeWelcomeRepository(),
  },
  logger,
  cache: new RCache(RedisMock),
}

export default ctx
