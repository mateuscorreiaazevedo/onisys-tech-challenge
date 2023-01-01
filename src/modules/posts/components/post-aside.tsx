import { Flex, Heading } from '@chakra-ui/react'
import { themeHelper } from '@/modules/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PostAside = (post: Post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Flex
        shadow='base'
        gap={2}
        bg={themeHelper('bg-light', 'bg-dark')}
        w={'80'}
        p={2}
        _hover={{ shadow: 'md' }}
        borderRadius="lg"
        css={`
            transition: all 0.3s;
          img {
            border-radius: 8px;
            transition: all 0.3s;
          }
          &:hover {
            img {
              transform: scale(1.06);
            }
          }
        `}
      >
          {post.featured_media && (
            <Image
              className="thumbnail"
              src={post.featured_media.thumbnail}
              alt={post.headline}
              width={100}
              height={100}
            />
          )}
        <Heading fontSize="md">{post.title}</Heading>
      </Flex>
    </Link>
  )
}
