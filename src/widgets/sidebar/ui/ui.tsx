import { Divider } from '@ui/divider'

import { SidebarLogo, SidebarNav } from '@entities/sidebar'

export const SidebarWidget = () => {
  return (
    <div className='flex h-dvh w-40 bg-black'>
      <div className='flex w-full flex-col p-2.5'>
        <SidebarLogo className='mb-5' />
        <SidebarNav />
      </div>
      <Divider vertical />
    </div>
  )
}
