// AppLayout.tsx
import { useEffect } from "react";
import { Outlet, NavLink } from 'react-router-dom'
import { Search, LayoutDashboard, MapPin, BarChart3, Settings as SettingsIcon, FilePlus2, Landmark, Scale, ShieldCheck, Bot as BotIcon, LineChart, Percent } from 'lucide-react'
import { cn } from '../utils/cn'
export function AppLayout(){
  useEffect(()=>{ const h=new Date().getHours(); document.documentElement.classList.toggle('dark', (h>=18||h<6)) },[])
  return (
    <div className="h-screen flex">
      <aside className="w-64 border-r p-4 hidden md:flex flex-col gap-2">
        <div className="flex items-center gap-2 px-2 py-1 text-xl font-semibold"><div className="rounded-lg w-8 h-8 grid place-items-center border">K</div><span>Kontra</span></div>
        <nav className="mt-6 flex flex-col gap-1 text-sm">
          <Item to="/" icon={<LayoutDashboard size={18}/>} label="Dashboard"/>
          <Item to="/applications" icon={<FilePlus2 size={18}/>} label="Applications"/>
          <Item to="/ai" icon={<BotIcon size={18}/>} label="AI Ingest"/>
          <Item to="/escrows" icon={<Scale size={18}/>} label="Escrows"/>
          <Item to="/trading" icon={<Landmark size={18}/> } label="Trading"/>
          <Item to="/compliance" icon={<ShieldCheck size={18}/> } label="Compliance"/>
          <Item to="/feedback" icon={<LineChart size={18}/> } label="Feedback"/>
          <Item to="/land" icon={<MapPin size={18}/>} label="Land Acquisition"/>
          <Item to="/market" icon={<BarChart3 size={18}/> } label="Market Analysis"/>
          <Item to="/settings" icon={<SettingsIcon size={18}/> } label="Settings"/>
          <Item to="/olbs" icon={<Percent size={18}/> } label="OLB Coupon"/>
        </nav>
      </aside>
      <main className="flex-1 min-w-0">
        <header className="flex items-center gap-3 p-4 border-b">
          <div className="relative w-80 max-w-full">
            <Search className="absolute left-2 top-2.5" size={18}/>
            <input aria-label="Search" placeholder="Search…" className="w-full pl-8 pr-2 py-2 rounded-xl border"/>
          </div>
          <div className="ml-auto"><div className="border rounded-xl px-3 py-1.5 text-sm">Admin ▾</div></div>
        </header>
        <div className="p-6"><Outlet/></div>
      </main>
    </div>
  )
}
function Item({ to, icon, label }:{ to:string, icon:React.ReactNode, label:string }){
  return (
    <NavLink to={to} className={({isActive}) => cn("flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-black/5", isActive && "bg-black/5")} end>
      {icon}<span>{label}</span>
    </NavLink>
  )
}
