import { themeHelper } from '@/modules/core'
import { Box, Card, CardBody, Center, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

export const CardPost = (post: Post) => {
  return (
    <Card
      cursor="pointer"
      maxW="xs"
      transition="all .3s"
      bg={themeHelper('card-light', 'card-dark')}
      css={`
        box-shadow: 0 5px 5px rgba(0,0,0,0.05);
        &:hover {
          box-shadow: 0 5px 5px rgba(0,0,0,0.1);
          img {
           transform: scale(1.06);
        }
        }
      `}
    >
      <CardBody>
        <Center borderRadius="lg" position="relative" overflow="hidden">
          <Image
            objectFit="contain"
            src={post.featured_media.medium}
            alt={post.slug}
            transition="all .3s"
          />
        </Center>
        <Stack mt={6} spacing={4}>
          <Box color="gray.500" fontWeight="bold" textTransform="uppercase" fontSize="text">
            {post.categories.map((category) => category.name).join(', ')}
          </Box>
          <Heading as="h2" color="primary" fontSize="banner">
            {post.title}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  )
}
