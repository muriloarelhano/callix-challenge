import axios, { AxiosInstance } from 'axios'

export const httpClient: AxiosInstance = axios.create({
  baseURL: process.env.SPACEX_BASE_URL || 'https://api.spacexdata.com/v4',
})
