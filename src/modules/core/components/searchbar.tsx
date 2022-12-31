import {
  Box,
  VStack,
  Input,
  Spinner,
  Text,
  Center,
  useOutsideClick,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { useSearchPosts } from '@/modules/posts'
import { CardSearchbar } from './card-searchbar'
import { themeHelper } from '..'
import { BsSearch } from 'react-icons/bs'
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
    handler: () => {
      setOpenSearch(false)
      setSearch('')
    }
  })

  return (
    <Box w="full" ref={ref}>
      <InputGroup>
        <InputLeftElement color="gray.400">
          <BsSearch />
        </InputLeftElement>
        <Input
          bg={themeHelper('input-light', 'input-dark')}
          w="full"
          placeholder="Pesquisar artigos, notícias, etc..."
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOpenSearch((prev) => !prev)}
        />
      </InputGroup>
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
            height: 70vh;
            visibility: visible;
          }
          &.closed {
            transition: all 0.6s;
          }
        `}
      >
        <VStack
          overflowY={'auto'}
          h={0}
          className={openSearch ? 'active' : ''}
          css={`
            &.active {
              transition: all 0.35s;
              height: 70vh;
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
                <Text color={themeHelper('gray.400', 'gray.200')} fontSize="banner">
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
