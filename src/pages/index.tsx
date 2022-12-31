import { postService } from '@/modules/posts'
import { CardPost } from '@/modules/home'
import { GetServerSideProps } from 'next'
import { Box, Grid } from '@chakra-ui/react'
import React from 'react'

type Props = {
  posts: Posts
}

function Home ({ posts }: Props) {
  return (
    <Box as="main">
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={10} maxW='980px'>
        {posts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </Grid>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<{ posts: Posts }> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, style-while-revalidate=50')

  const posts = await postService.getAll()

  return {
    props: {
      posts
    }
  }
}

export default Home
