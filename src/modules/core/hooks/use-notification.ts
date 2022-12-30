import { useToast } from '@chakra-ui/react'

type Status = 'error' | 'success' | 'info' | 'warning' | 'loading'

export const useNotification = () => {
  const toast = useToast()

  const setNotification = (message: any, status: Status, description?: string) => {
    toast({
      position: 'top-right',
      title: message,
      description,
      status,
      duration: 2000
    })
  }

  return { setNotification }
}
