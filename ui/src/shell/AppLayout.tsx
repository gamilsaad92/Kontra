import { Outlet, NavLink } from 'react-router-dom'
import { Search, LayoutDashboard, MapPin, BarChart3, Settings as SettingsIcon } from 'lucide-react'
import { useEffect } from 'react'
import { cn } from '../utils/cn'

export function AppLayout() {
  // Simple time-based theme: dark after 6pm until 6am
  useEffect(() => {
    const hours = new Date().getHours()
    const isDark = hours >= 18 || hours < 6
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  return (
    <div className="h-full flex">
      <aside className="w-64 bg-bg-soft dark:bg-[hsl(var(--bg-elevated))] border-r border-border p-4 hidden md:flex flex-col gap-2">
        <div className="flex items-center gap-2 px-2 py-1 text-xl font-semibold">
          <div className="bg-white/10 rounded-lg w-8 h-8 grid place-items-center">K</div>
          <span>Kontra</span>
        </div>

        <nav className="mt-6 flex flex-col gap-1 text-sm">
          <Item to="/" icon={<LayoutDashboard size={18}/>} label="Dashboard"/>
          <Item to="/land" icon={<MapPin size={18}/>} label="Land Acquisition"/>
          <Item to="/market" icon={<BarChart3 size={18}/> } label="Market Analysis"/>
          <Item to="/settings" icon={<SettingsIcon size={18}/> } label="Settings"/>
        </nav>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="flex items-center gap-3 p-4 border-b border-border">
          <div className="relative w-80 max-w-full">
            <Search className="absolute left-2 top-2.5" size={18}/>
            <input
              aria-label="Search"
              placeholder="Search…"
              className="w-full pl-8 pr-2 py-2 rounded-xl bg-bg-soft dark:bg-[hsl(var(--bg-elevated))] border border-border outline-none"
            />
          </div>
          <div className="ml-auto">
            <div className="border border-border rounded-xl px-3 py-1.5 text-sm">Admin ▾</div>
          </div>
        </header>

        <div className="p-6">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

function Item({ to, icon, label }:{ to:string, icon:React.ReactNode, label:string }){
  return (
    <NavLink
      to={to}
      className={({isActive}) => cn(
        "flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-bg-soft dark:hover:bg-[hsl(var(--bg-elevated))]",
        isActive && "bg-bg-soft dark:bg-[hsl(var(--bg-elevated))]"
      )}
      end
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  )
}
