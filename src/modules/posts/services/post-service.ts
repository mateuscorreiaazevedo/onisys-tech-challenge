import { service } from '@/modules/core'
import { postConstants } from '..'

type GetAllProps = {
  page?: number
  search?: string
  orderby?: string
}

class PostService {
  async getAll (params: GetAllProps) {
    const { search, page = 1, orderby } = params
    const response = await service.request({
      url: postConstants.POSTS_URL,
      params: {
        page,
        ...(search && { search }),
        ...(orderby && { orderby })
      }
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body.message)
      default:
        throw new Error('Erro no sistema, por favor, tente mais tarde.')
    }
  }

  async get (slug: string) {
    const response = await service.request({
      url: postConstants.POST_URL.replace(':POST_SLUG', slug)
    })

    switch (response.code) {
      case 200:
        return response.body
      case 400:
        throw new Error(response.body.message)
      case 404:
        throw new Error(response.body.message)
      case 422:
        throw new Error(response.body.message)
      case 500:
        throw new Error(response.body.message)
      default:
        throw new Error('Erro no sistema, por favor, tente mais tarde.')
    }
  }
}

export const postService = new PostService()
