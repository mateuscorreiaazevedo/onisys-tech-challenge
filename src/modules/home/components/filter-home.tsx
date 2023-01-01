import { themeHelper, useNotification } from '@/modules/core'
import { postService } from '@/modules/posts'
import { Box, Flex, FormLabel, Select } from '@chakra-ui/react'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<Posts>>
}

export const FilterHome = ({ setData }: Props) => {
  const { setNotification } = useNotification()

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const { value } = e.currentTarget
      const posts = await postService.getAll({ orderBy: value })
      setData(posts)
    } catch (error) {
      setNotification((error as any).message, 'error')
    }
  }

  return (
    <Flex mb={8} alignSelf="flex-end">
      <FormLabel display="flex" alignItems="center">
        <Box w="40">Ordenar por:</Box>
        <Select
          name="orderby"
          variant="filled"
          bg={themeHelper('bg-light', 'bg-dark')}
          placeholder="Selecionar"
          onChange={handleChange}
        >
          <option value="date">Data de publicação</option>
          <option value="relevance">Relevância</option>
        </Select>
      </FormLabel>
    </Flex>
  )
}
