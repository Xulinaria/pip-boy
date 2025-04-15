import { Outlet } from 'react-router'

import { SidebarNav } from '@entities/sidebar'

export const AppLayout = () => {
  return (
    <div className='flex'>
      <SidebarNav />
      <main className='p-2.5'>
        <Outlet />
      </main>
    </div>
  )
}
