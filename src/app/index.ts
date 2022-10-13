if (process.env.NODE_ENV === 'production') require('newrelic')

import { Express } from 'express'
import rest from './http/rest'
import { ctx } from './context'

const server = (restServer: Promise<Express>) => {
  const restPort = process.env.REST_PORT || 3000

  return async () => {
    (await restServer).listen(restPort, () => {
      global.console.log(`rest server ready at http://localhost:${restPort}`)
    })
  }
}

server(rest(ctx))
