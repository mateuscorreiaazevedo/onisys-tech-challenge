import { themeHelper } from '@/modules/core'
import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PostAside = (post: Post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Flex gap={2} bg={themeHelper('bg-light', 'bg-dark')} w={'80'} p={2} borderRadius="md">
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
