import { Card } from '../components/Card'
import { MapPin, Bot } from 'lucide-react'

export function Dashboard(){
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl w-12 h-12 grid place-items-center bg-bg-soft dark:bg-[hsl(var(--bg-elevated))]">
              <Bot/>
            </div>
            <div>
              <div className="text-xl font-semibold">AI-Powered</div>
              <div className="text-xl -mt-1 font-semibold">Property Search</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl w-12 h-12 grid place-items-center bg-bg-soft dark:bg-[hsl(var(--bg-elevated))]">
              <MapPin/>
            </div>
            <div>
              <div className="text-xl font-semibold">Site Suitability</div>
              <div className="text-xl -mt-1 font-semibold">Analysis</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="text-3xl font-bold">Recent</div>
          <div className="text-3xl font-bold -mt-1">Market Analysis</div>

          <div className="mt-8 flex items-baseline gap-4">
            <div className="text-6xl font-semibold">12</div>
            <div className="text-lg">Reports</div>
          </div>
          <div className="text-fg-dim mt-2">Generated this month</div>
        </Card>

        <Card className="p-6">
          <div className="text-3xl font-bold">Pending</div>
          <div className="text-3xl font-bold -mt-1">Property</div>
          <div className="text-3xl font-bold -mt-1">Transactions</div>

          <div className="mt-8 flex items-baseline gap-4">
            <div className="text-6xl font-semibold">8</div>
            <div className="text-lg">Transactions</div>
          </div>
          <div className="text-fg-dim mt-2">Awaiting review</div>
        </Card>
      </div>
    </div>
  )
}
