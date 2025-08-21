import { cn } from '../utils/cn'

export function Button({children, className, ...props}:{children:React.ReactNode, className?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>){
  return (
    <button
      className={cn("inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-border bg-bg-soft dark:bg-[hsl(var(--bg-elevated))] hover:opacity-90", className)}
      {...props}
    >
      {children}
    </button>
  )
}
