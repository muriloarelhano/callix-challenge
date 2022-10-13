import compression from 'compression'
import cors from 'cors'
import express, { Express, json, Request, Response } from 'express'
import helmet from 'helmet'

import YAML from 'js-yaml'
import JsonRefs from 'json-refs'
import { join } from 'path'
import swaggerUi from 'swagger-ui-express'
import { Context } from '../../../interfaces'
import router from './routes'

const isProd = process.env.NODE_ENV === 'production'

export default (context: Context): Express => {
  const server = express()

  server.use(json())
  server.use(compression())

  /* istanbul ignore next */
  if (isProd) {
    server.use(cors())
    server.use(helmet())
  }

  const docPath =
    process.env.NODE_ENV === 'development'
      ? join(__dirname, '..', '..', '..', '..', '/docs/api/openapi.yaml')
      : join(__dirname, '..', '..', '..', '/docs/api/openapi.yaml')

  JsonRefs.resolveRefsAt(docPath, {
    loaderOptions: {
      processContent: (content: any, callback: any) => {
        callback(undefined, YAML.load(content.text))
      },
    },
  })
    .then((docs) => {
      server.use('/docs', swaggerUi.serve, swaggerUi.setup(docs.resolved, { explorer: true }))
    })
    .catch((err) => console.warn(err.message))

  /*This function is used to kubernetes liveness probe */
  server.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', services: { swagger: 'available' } })
  })

  /* istanbul ignore next */
  server.use('/', router(context))

  return server
}
