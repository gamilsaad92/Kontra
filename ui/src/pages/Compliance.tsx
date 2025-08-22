import { useState } from 'react'
import { Button } from '../components/Button'
import { FeatureGuard } from '../featureFlags'
import { api } from '../lib/api'
export default function Compliance(){
  const [result, setResult] = useState<any>(null)
  async function run(){ setResult(await api('/compliance/scan', { method:'POST', body: JSON.stringify({}) })) }
  return (
    <FeatureGuard flag="compliance">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Compliance & Auditing</h1>
        <Button onClick={run}>Run Regulatory Scan</Button>
        {result && <pre className="text-xs p-3 rounded-xl border overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </FeatureGuard>
  )
}
