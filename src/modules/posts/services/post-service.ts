import { Service } from '@/modules/core'
import { postConstants } from '..'

class PostService extends Service {
  async getAll () {
    const response = await this.request({
      url: postConstants.POST_URL
    })

    switch (response.code) {
      case 200: return response.body
      case 404: throw new Error(response.body.message)
    }
  }
}

export const postService = new PostService()
