import { restGet } from './setup'

describe('Graphql', () => {
  test('should get ping', async () => {
    await restGet('/ping').expect(({ body }) => {
      expect(body).toBe('PONG')
    })
  })
})
