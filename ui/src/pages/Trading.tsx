import { useState } from 'react'
import { FormField } from '../components/FormField'
import { Button } from '../components/Button'
import { FeatureGuard } from '../featureFlags'
import { api } from '../lib/api'
export default function Trading(){
  const [status, setStatus] = useState('')
  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = { type: String(fd.get('type')), notional: Number(fd.get('notional')||0), counterparty: String(fd.get('counterparty')||'') }
    const res = await api('/trades', { method:'POST', body: JSON.stringify(payload) })
    setStatus(`Trade ${res.id} accepted`)
  }
  return (
    <FeatureGuard flag="trading">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Trading</h1>
        <form onSubmit={submit} className="grid md:grid-cols-4 gap-4">
          <FormField label="Type"><select name="type" className="w-full px-3 py-2 rounded-xl border">
            <option value="loan_sale">loan_sale</option><option value="participation">participation</option><option value="repo">repo</option><option value="securitization">securitization</option>
          </select></FormField>
          <FormField label="Notional"><input name="notional" type="number" className="w-full px-3 py-2 rounded-xl border" /></FormField>
          <FormField label="Counterparty"><input name="counterparty" className="w-full px-3 py-2 rounded-xl border" /></FormField>
          <div className="self-end"><Button type="submit">Submit</Button></div>
        </form>
        {status && <div className="text-sm opacity-70">{status}</div>}
      </div>
    </FeatureGuard>
  )
}
