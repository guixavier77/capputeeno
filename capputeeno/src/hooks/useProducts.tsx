import { ProductsFetchResponse } from '@/types/ProductsResponse'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query: `query{
        allProducts{
          id
          name
          price_in_cents
          image_url
        }
      }`,
  })
}

const useProducts = () => {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ['products'],
  })
  return {
    data: data?.data?.data?.allProducts,
  }
}

export default useProducts
