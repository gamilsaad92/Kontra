import { useEffect, useState } from 'react'
import { FormField } from '../components/FormField'
import { Button } from '../components/Button'
import { Table, THead, TRow, TCell } from '../components/Table'
import { api } from '../lib/api'
type App = { id:string; borrower_name:string; amount:number; property_address?:string; created_at?:string }
export default function Applications(){
  const [items, setItems] = useState<App[]>([])
  const [saving, setSaving] = useState(false)
  async function load(){ setItems(await api('/applications')) }
  useEffect(()=>{ load() }, [])
  async function create(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = { borrower_name: String(fd.get('borrower_name')||''), amount: Number(fd.get('amount')||0), property_address: String(fd.get('property_address')||'') }
    setSaving(true)
    try { await api('/applications', { method:'POST', body: JSON.stringify(payload) }); e.currentTarget.reset(); await load() } finally { setSaving(false) }
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Loan Applications</h1>
      <form onSubmit={create} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField label="Borrower name"><input name="borrower_name" required className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <FormField label="Amount"><input name="amount" type="number" min="0" required className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <FormField label="Property address"><input name="property_address" className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <div className="self-end"><Button disabled={saving} type="submit">{saving ? 'Saving…' : 'Create'}</Button></div>
      </form>
      <Table>
        <THead><div>Borrower</div><div>Amount</div><div>Address</div><div>Created</div></THead>
        {items.map(x => (<TRow key={x.id}><TCell span={3}>{x.borrower_name}</TCell><TCell span={2}>${x.amount.toLocaleString()}</TCell><TCell span={5}>{x.property_address || '—'}</TCell><TCell span={2}>{x.created_at?.slice(0,10) ?? '—'}</TCell></TRow>))}
      </Table>
    </div>
  )
}
