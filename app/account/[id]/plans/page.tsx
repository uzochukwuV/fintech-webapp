import Menu from '@/components/account/menu'
import SubComponent from '@/components/home/sub'
import ActivePlans from '@/components/subs/activeplans'
import Dashboard from '@/components/subs/dashboard'
import React from 'react'

async function Page() {
    
  return (
    <div>
        <Menu />
        <Dashboard />
        <ActivePlans />
    </div>
  )
}

export default Page