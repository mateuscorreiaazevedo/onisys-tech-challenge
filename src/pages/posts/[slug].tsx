import { PostAside, postService } from '@/modules/posts'
import { Flex, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

type Props = {
  post: Post
  posts: Posts
}

function PostSlingle ({ post, posts }: Props) {
  console.log(post)

  return (
    <Flex minH="100vh">
      <VStack>
        {posts.map((post) => (
          <PostAside key={post.id} {...post} />
        ))}
      </VStack>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Posts = await postService.getAll({})

  const paths = data.map((post) => ({
    params: {
      slug: post.slug
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug

  const posts = await postService.getAll({ orderby: 'relevance' })
  const post = await postService.get(slug as string)

  return {
    props: { post, posts },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default PostSlingle
