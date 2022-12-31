import { Box, VStack, Input, Spinner, Text, Center } from '@chakra-ui/react'
import { themeHelper } from '..'
import React from 'react'
import { useSearchPosts } from '@/modules/posts'

export const SearchBar = () => {
  const [search, setSearch] = React.useState('')
  const { handleSubmit, loading, posts } = useSearchPosts(search)
  React.useEffect(() => {
    if (search) {
      handleSubmit()
    }
  }, [search])

  return (
    <>
      <Input
        bg={themeHelper('input-light', 'input-dark')}
        className="input"
        w="full"
        placeholder="Pesquisar artigos, notícias, etc..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box
        shadow="base"
        transition="all .4s"
        className="box-answer"
        bg={themeHelper('input-light', 'input-dark')}
        position="absolute"
        left={-2}
        top={16}
        h={0}
        w="100vw"
        visibility="hidden"
      >
        <VStack
          className="content"
          overflowY={'auto'}
          h="60vh"
          visibility="hidden"
        >
          {loading
            ? (
            <Center h="full">
              <Spinner size="xl" />
            </Center>
              )
            : (
                posts.map((post) => (
              <div key={post.id}>
                <img src={post.featured_media?.medium} alt="" />
                {post.title}
              </div>
                ))
              )}
          {!posts && <Text>Não existem artigos relacionados ao termo pesquisado!</Text>}
        </VStack>
      </Box>
    </>
  )
}
