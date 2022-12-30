import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { envSettings } from '@/main'

type HttpRequest<T> = {
  url: string
  body?: T
  method?: 'get' | 'post' | 'put' | 'delete'
  headers?: any
  params?: any
}

type HttpResponse<T> = {
  code: number
  body: T
}

const BASE_URL = envSettings.API_URL

export class Service {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({
      baseURL: BASE_URL
    })
  }

  async request<T = any> (props: HttpRequest<T>): Promise<HttpResponse<T>> {
    const { url, body, headers, method, params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        data: body || {},
        headers: headers || {},
        params: params || {},
        method: method || 'get',
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      code: response.status,
      body: response.data
    }
  }
}
