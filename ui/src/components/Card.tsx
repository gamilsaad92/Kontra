import { cn } from '../utils/cn'

export function Card({ className, children }:{className?:string, children:React.ReactNode}){
  return (
    <div className={cn("rounded-2xl bg-card border border-border shadow-soft", className)}>
      {children}
    </div>
  )
}
