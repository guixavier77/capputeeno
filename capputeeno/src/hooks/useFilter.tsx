import { FilterContext } from '@/contexts/FilterContext'
import { useContext } from 'react'

const useFilter = () => {
  return useContext(FilterContext)
}

export default useFilter
