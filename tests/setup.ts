import request from 'supertest'
import restSetup from '../src/app/http/rest'
import context from './context'



const restServer = restSetup(context)


export const restGet = (url: string, statusCode = 200) => {
  return request(restServer).get(url)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(statusCode)
}

export const restPost = (url: string, payload: any = {}, statusCode = 200) => {
  return request(restServer).post(url)
    .send(payload)
    .expect('Content-Type', /json/)
    .expect(statusCode)
}
