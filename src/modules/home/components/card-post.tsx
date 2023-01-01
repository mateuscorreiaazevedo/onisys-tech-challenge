import { themeHelper } from '@/modules/core'
import { Box, Card, CardBody, Center, Divider, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CardPost = (post: Post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card
        h="370px"
        cursor="pointer"
        maxW="xs"
        transition="all .3s"
        bg={themeHelper('card-light', 'card-dark')}
        css={`
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
          &:hover {
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
            img {
              transform: scale(1.06);
            }
          }
        `}
      >
        <CardBody>
          <Center
            borderRadius="lg"
            position="relative"
            overflow="hidden"
            css={`
              .image-card {
                transition: all 0.3s;
              }
            `}
          >
            {post.featured_media && (
              <Image
                loading='lazy'
                blurDataURL={post.featured_media['web-stories-publisher-logo']}
                placeholder='blur'
                className="image-card"
                src={post.featured_media?.['mid-size']}
                alt={post.slug}
                width={300}
                height={300}
              />
            )}
          </Center>
          <Stack mt={6} spacing={4}>
            <Box color="gray.500" fontWeight="bold" textTransform="uppercase" fontSize="text">
              {post?.categories.map((category) => category.name).join(', ')}
            </Box>
            <Divider />
            <Heading as="h2" color="primary" fontSize="banner">
              {post.title}
            </Heading>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  )
}
