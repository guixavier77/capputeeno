import { ProductsFetchResponse } from '@/types/ProductsResponse'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import useFilter from './useFilter'
import { mountQuery } from '@/utils/Graphql-filters'
import { useDeferredValue } from 'react'

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query,
  })
}

const useProducts = () => {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
  })
  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase()),
  )
  return {
    data: filteredProducts,
  }
}

export default useProducts
