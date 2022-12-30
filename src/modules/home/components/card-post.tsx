import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import React from 'react'

export const CardPost = (post: Post) => {
  return (
    <Card
      transition="all 300ms"
      cursor="pointer"
      maxW="xs"
      shadow="xl"
      _hover={{
        transform: 'scale(1.1)',
        shadow: 'lg'
      }}
      bg="gray.100"
    >
      <CardBody>
        <Center>
          <Image
            objectFit="contain"
            borderRadius="lg"
            src={post.featured_media.medium}
            alt={post.slug}
          />
        </Center>
        <Stack mt={6} spacing={4}>
          {post.categories.map((category) => (
            <Box
              key={category.id}
              color="gray.500"
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="xs"
            >
              {category.name}
            </Box>
          ))}
          <Heading as="h2" color="primary" fontSize="16">
            {post.title}
          </Heading>
          <Text color="gray.700" fontWeight="semibold">
            {post.excerpt}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}
