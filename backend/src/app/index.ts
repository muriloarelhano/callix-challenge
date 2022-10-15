import { Express } from 'express'
import rest from './http/rest'
import { ctx } from './context'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const server = (restServer: Express) => {
  const PORT = process.env.PORT || 3000

  return () => {
    restServer.listen(PORT, () => {
      console.log(`rest server ready at http://localhost:${PORT}`)
    })
  }
}

server(rest(ctx))()
