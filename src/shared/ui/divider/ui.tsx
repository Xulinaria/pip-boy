import { cn } from '@lib/helper/cn'

interface DividerProps {
  vertical?: boolean
  className?: string
}

export const Divider = ({ vertical = false, className }: DividerProps) => {
  return (
    <div
      className={cn(
        'bg-white opacity-10',
        vertical ? 'h-full w-[1px]' : 'h-[1px] w-full',
        className
      )}
    ></div>
  )
}
