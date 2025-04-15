import { NAV_ITEMS } from '../../config/navigation'
import { SidebarLink } from '../sidebar-link'

export const SidebarNav = () => {
  return (
    <div className='flex flex-col gap-y-0.5'>
      {NAV_ITEMS.map(item => (
        <SidebarLink
          path={item.path}
          name={item.name}
        />
      ))}
    </div>
  )
}
