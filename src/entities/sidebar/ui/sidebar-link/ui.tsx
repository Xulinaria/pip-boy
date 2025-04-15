import { NavLink } from 'react-router'

import { cn } from '@shared/lib/helper/cn'

interface SidebarLinkProps {
  path: string
  name: string
}

export const SidebarLink = ({ path, name }: SidebarLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          'px-2 py-1 text-base text-white transition-colors hover:bg-[#161616]',
          isActive && 'rounded-md bg-[#161616]'
        )
      }
    >
      {name}
    </NavLink>
  )
}
