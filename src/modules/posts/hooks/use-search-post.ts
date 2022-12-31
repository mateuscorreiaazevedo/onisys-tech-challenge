import { useNotification } from '@/modules/core'
import React from 'react'
import { postService } from '..'

export const useSearchPosts = (search?: string) => {
  const [posts, setPosts] = React.useState<Posts>([])
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await postService.getAll({ search })
      setPosts(response)
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return {
    handleSubmit,
    loading,
    posts
  }
}
