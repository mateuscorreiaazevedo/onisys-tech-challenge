import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { themeHelper } from '..'

export const CardSearchbar = (post: Post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Flex
        w="980px"
        transition="all .3s"
        my={3}
        gap={4}
        p={4}
        borderRadius="md"
        bg={themeHelper('bg-light', 'bg-dark')}
        css={'.image-thumb { border-radius: 8px;}'}
        shadow='base'
        _hover={{ shadow: 'lg' }}
      >
        <Image
          className="image-thumb"
          src={post.featured_media?.thumbnail}
          alt={post.slug}
          width={150}
          height={150}
        />
        <Heading>
          {post.title}
        </Heading>
      </Flex>
    </Link>
  )
}
