import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { MapPin, Bot, FileText, LineChart } from 'lucide-react'
import { api } from '../lib/api'
export function Dashboard(){
  const [portfolio, setPortfolio] = useState<any>(null)
  useEffect(() => { api('/analytics/portfolio').then(setPortfolio).catch(()=>setPortfolio(null)) }, [])
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card><div className="p-6 flex items-start gap-3"><div className="rounded-xl w-12 h-12 grid place-items-center border"><Bot/></div><div className="flex-1"><div className="text-xl font-semibold">AI-Powered</div><div className="text-xl -mt-1 font-semibold">Property Search</div><a href="/land" className="inline-block mt-4 text-sm underline">Open</a></div></div></Card>
        <Card><div className="p-6 flex items-start gap-3"><div className="rounded-xl w-12 h-12 grid place-items-center border"><MapPin/></div><div className="flex-1"><div className="text-xl font-semibold">Site Suitability</div><div className="text-xl -mt-1 font-semibold">Analysis</div><a href="/market" className="inline-block mt-4 text-sm underline">Open</a></div></div></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="p-6 text-3xl font-bold flex items-center gap-2"><LineChart className="opacity-70"/> Portfolio Summary</div>
          <div className="px-6 pb-6 grid grid-cols-2 gap-4">
            <Stat label="Loans" value={portfolio?.loans ?? '—'} />
            <Stat label="UPB" value={portfolio ? fmoney(portfolio.upb) : '—'} />
            <Stat label="Delinquency" value={portfolio ? `${(portfolio.delinquency_rate*100).toFixed(2)}%` : '—'} />
            <Stat label="WAC" value={portfolio ? `${(portfolio.wac*100).toFixed(2)}%` : '—'} />
          </div>
        </Card>
        <Card>
          <div className="p-6 text-3xl font-bold flex items-center gap-2"><FileText className="opacity-70"/> Quick actions</div>
          <div className="px-6 pb-6 grid grid-cols-2 gap-3">
            <a href="/applications" className="border rounded-xl px-4 py-3 text-sm hover:opacity-90">New Application</a>
            <a href="/ai" className="border rounded-xl px-4 py-3 text-sm hover:opacity-90">AI Ingest</a>
            <a href="/escrows" className="border rounded-xl px-4 py-3 text-sm hover:opacity-90">Escrows</a>
            <a href="/trading" className="border rounded-xl px-4 py-3 text-sm hover:opacity-90">Trading</a>
          </div>
        </Card>
      </div>
    </div>
  )
}
function Stat({label, value}:{label:string; value:React.ReactNode}){
  return (<div className="rounded-xl border p-4"><div className="text-sm opacity-60">{label}</div><div className="text-2xl font-semibold mt-1">{value}</div></div>)
}
function fmoney(n:number){ return '$' + n.toLocaleString() }
