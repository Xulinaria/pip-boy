import { cn } from '@shared/lib/helper/cn'

interface SidebarLogoProps {
  className?: string
}

export const SidebarLogo = ({ className }: SidebarLogoProps) => {
  return <h1 className={cn('text-xl font-black text-white', className)}>Pip-boy</h1>
}
