import { service } from '@/modules/core'
import { postConstants } from '..'

type GetAllProps = {
  search?: string,
  page?: number
}

class PostService {
  async getAll (params: GetAllProps) {
    const { search, page = 1 } = params
    const response = await service.request({
      url: postConstants.POST_URL,
      params: {
        page,
        ...(search && { search })
      }
    })

    switch (response.code) {
      case 200: return response.body
      case 404: throw new Error(response.body.message)
    }
  }
}

export const postService = new PostService()
