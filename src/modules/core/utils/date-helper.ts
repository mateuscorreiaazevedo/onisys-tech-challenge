import { format } from 'date-fns'

export default {
  extense: (value: string | Date) => format(new Date(value), 'dd MMM, yyyy'),
  default: (value: string | Date) => format(new Date(value), 'dd/MM/yyyy')
}
