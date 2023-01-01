import { PostAside, postService } from '@/modules/posts'
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
  post: Post
  posts: Posts
}

function PostSlingle ({ post, posts }: Props) {
  return (
    <>
      <Head>
        {Object.keys(post.metas).map(key => (
          <meta name={key} key={key} content={post.metas[key] as string} />
        ))}
        <title>{post.title} | Mateus Azevedo</title>
      </Head>
      <Flex minH="100vh" gap={4}>
        <VStack>
          <Heading>{post.title}</Heading>
          <Box as="main" w="2xl" dangerouslySetInnerHTML={{ __html: post.content }} />
        </VStack>
        <VStack>
          {posts.map((post) => (
            <PostAside key={post.id} {...post} />
          ))}
        </VStack>
      </Flex>
    </>
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

  const posts = await postService.getAll({ orderBy: 'relevance' })
  const post = await postService.get(slug as string)

  return {
    props: { post, posts },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default PostSlingle
