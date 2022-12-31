import { Box, VStack, Input, Spinner, Text, Center, useOutsideClick } from '@chakra-ui/react'
import { useSearchPosts } from '@/modules/posts'
import { CardSearchbar } from './card-searchbar'
import { themeHelper } from '..'
import React from 'react'

export const SearchBar = () => {
  const ref = React.useRef(null)
  const [search, setSearch] = React.useState('')
  const [openSearch, setOpenSearch] = React.useState(false)
  const { handleSubmit, loading, posts } = useSearchPosts(search)

  React.useEffect(() => {
    if (search) {
      handleSubmit()
    }
  }, [search])

  useOutsideClick({
    ref,
    handler: () => setOpenSearch(false)
  })

  return (
    <Box w="full" ref={ref}>
      <Input
        bg={themeHelper('input-light', 'input-dark')}
        w="full"
        placeholder="Pesquisar artigos, notícias, etc..."
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setOpenSearch((prev) => !prev)}
      />
      <Box
        className={openSearch ? 'active' : 'closed'}
        shadow="base"
        transition="all .4s"
        bg={themeHelper('input-light', 'input-dark')}
        position="absolute"
        left={-2}
        top={16}
        h={0}
        w="100vw"
        visibility="hidden"
        css={`
          &.active {
            height: 74vh;
            visibility: visible;
          }
          &.closed {
            transition: all 0.6s ease-out;
          }
        `}
      >
        <VStack
          overflowY={'auto'}
          h={0}
          py={4}
          className={openSearch ? 'active' : 'closed'}
          css={`
            &.active {
              transition: all 0.35s ease-in;
              height: 70vh;
            }
            &.closed {
              transition: all 0.3s ease-out;
            }
          `}
        >
          {loading
            ? (
            <Center h="full">
              <Spinner size="xl" />
            </Center>
              )
            : (
                posts.map((post) => <CardSearchbar key={post.id} {...post} />)
              )}
          {!loading && (
            <>
              {!posts.length && (
                <Text color={themeHelper('gray.400', 'gray.200')} fontSize='banner'>
                  Não existem artigos relacionados ao termo pesquisado!
                </Text>
              )}
            </>
          )}
        </VStack>
      </Box>
    </Box>
  )
}
