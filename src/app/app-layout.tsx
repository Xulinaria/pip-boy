import { Outlet } from 'react-router'

import { SidebarWidget } from '@widgets/sidebar'

export const AppLayout = () => {
  return (
    <div className='flex'>
      <SidebarWidget />
      <main className='p-2.5'>
        <Outlet />
      </main>
    </div>
  )
}
