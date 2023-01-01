import { postService } from '@/modules/posts'
import { CardPost, FilterHome } from '@/modules/home'
import { GetServerSideProps } from 'next'
import { Button, Grid, Spinner, VStack } from '@chakra-ui/react'
import { useNotification } from '@/modules/core'
import React from 'react'

type Props = {
  posts: Posts
}

function Home ({ posts: dataPosts }: Props) {
  const [posts, setPosts] = React.useState<Posts>(dataPosts)
  const [page, setPage] = React.useState(1)
  const [showButton, setShowButton] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()

  const handlePage = async () => {
    setLoading(true)
    try {
      const response = await postService.getAll({ page: page + 1 })
      setPage(page + 1)
      if (!response) {
        setShowButton(false)
      }
      setPosts([...posts, ...response])
    } catch (error) {
      setNotification((error as any).message, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <VStack as="main">
      <FilterHome setData={setPosts} />
      <Grid pb={6} gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10} maxW="980px">
        {posts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </Grid>
      {showButton && (
        <Button onClick={handlePage} colorScheme="blue" disabled={loading}>
          {loading ? <><Spinner mr={2}/> Carregando...</> : 'Carregar mais...'}
        </Button>
      )}
    </VStack>
  )
}

export const getServerSideProps: GetServerSideProps<{ posts: Posts }> = async ({ res, query }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, style-while-revalidate=50')
  const orderby = query.orderby
  const posts = await postService.getAll({ orderBy: orderby as string })

  return {
    props: {
      posts
    }
  }
}

export default Home
