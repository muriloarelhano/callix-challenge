if (process.env.NODE_ENV === 'production') require('newrelic')

import { Express } from 'express'
import rest from './http/rest'
import { ctx } from './context'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const server = (restServer: Express) => {
  const REST_PORT = process.env.REST_PORT || 3000

  return () => {
    restServer.listen(REST_PORT, () => {
      console.log(`rest server ready at http://localhost:${REST_PORT}`)
    })
  }
}

server(rest(ctx))()
