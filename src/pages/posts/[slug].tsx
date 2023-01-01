import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react'
import { dateHelper, themeHelper } from '@/modules/core'
import { PostAside, postService } from '@/modules/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import { BsCalendar, BsPen } from 'react-icons/bs'
import Head from 'next/head'
import React from 'react'

type Props = {
  post: Post
  posts: Posts
}

function PostSlingle ({ post, posts }: Props) {
  const [formattedDate, setFormattedDate] = React.useState('')

  React.useEffect(() => {
    setFormattedDate(dateHelper.default(post.modified))
  }, [])

  return (
    <>
      <Head>
        {Object.keys(post.metas).map((key) => (
          <meta name={key} key={key} content={post.metas[key] as string} />
        ))}
        <title>{post.title} | Mateus Azevedo</title>
      </Head>
      <Flex minH="100vh" gap={4}>
        <VStack as="main">
          <Heading color="primary" mb={4}>
            {post.title}
          </Heading>
          <Box as="article" w="2xl" dangerouslySetInnerHTML={{ __html: post.content }} mb={4} />
          <Box alignSelf='flex-start' my={3} fontSize='heading' fontWeight='semibold' color='secondary'>
            Biografia
          </Box>
          <Box
            as="article"
            w="2xl"
            dangerouslySetInnerHTML={{ __html: post.bibliography }}
            color={themeHelper('gray.500', 'gray.300')}
          />
        </VStack>
        <VStack as="aside">
          <Center gap={2} as="span" fontSize="subtitle" color={themeHelper('gray.500', 'gray.400')}>
            <BsCalendar /> Última atualização: <strong>{formattedDate}</strong>
          </Center>
          <Center gap={2} fontSize="subtitle" color={themeHelper('gray.500', 'gray.400')} pb={4}>
            <BsPen /> <strong>Escrito por</strong>
            {post.author.name}
          </Center>
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
    fallback: false
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
