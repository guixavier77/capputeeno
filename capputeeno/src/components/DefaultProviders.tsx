'use client'
import { FilterContextProvider } from '@/contexts/FilterContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  desktop: '968px',
  tablet: '768px',
}
interface DefaultProvidersProps {
  children: ReactNode
}

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  const client = new QueryClient()
  return (
    <>
      <QueryClientProvider client={client}>
        <FilterContextProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </FilterContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default DefaultProviders
