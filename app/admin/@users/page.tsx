import getAllUsers from '@/lib/admin'
import { getQueryClient } from '@/lib/query'
import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import AllUsers from '@/components/admin/users'

async function Page() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: async()=> {
          const users = await getAllUsers();
          if(users.error) throw new Error(users.error)
          if(users.success) return users.success
      },
  })
  return (
    <div>
        <HydrationBoundary state={dehydrate(queryClient)} >
            <AllUsers />
        </HydrationBoundary>
    </div>
  )
}

export default Page