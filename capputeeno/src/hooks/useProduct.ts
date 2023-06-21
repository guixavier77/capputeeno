import { ProductFetchResponse } from '@/types/Product'

import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
    query: `
      query{
        Product(id: "${productId}"){
          category
          name
          description
          price_in_cents
          image_url
        }
    }
    `,
  })
}

const useProduct = (id: string) => {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id,
  })
  return {
    data: data?.data?.data?.Product,
  }
}

export default useProduct
