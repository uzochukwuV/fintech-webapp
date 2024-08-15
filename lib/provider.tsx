"use client"

import {QueryClientProvider} from '@tanstack/react-query'
import { getQueryClient } from './query'
import { PropsWithChildren } from 'react'




export default function Provider({children}: PropsWithChildren) {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export {Provider as QueryProvider}