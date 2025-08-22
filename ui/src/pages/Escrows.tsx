import { useState } from 'react'
import { Table, THead, TRow, TCell } from '../components/Table'
import { FormField } from '../components/FormField'
import { Button } from '../components/Button'
import { api } from '../lib/api'
type Escrow = { id:string; type:'tax'|'insurance'; balance:number }
export default function Escrows(){
  const [loanId, setLoanId] = useState('')
  const [items, setItems] = useState<Escrow[]>([])
  async function load(){ if(!loanId) return; setItems(await api(`/escrows/${loanId}`)) }
  async function create(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    await api('/escrows', { method:'POST', body: JSON.stringify({ loan_id: loanId, type: String(fd.get('type')), balance: Number(fd.get('balance')||0) }) })
    await load()
  }
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Escrow Management</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <FormField label="Loan ID"><input value={loanId} onChange={e=>setLoanId(e.target.value)} className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <div className="self-end"><Button onClick={load} disabled={!loanId}>Load</Button></div>
      </div>
      <form onSubmit={create} className="grid md:grid-cols-4 gap-4">
        <FormField label="Type"><select name="type" className="w-full px-3 py-2 rounded-xl border"><option value="tax">tax</option><option value="insurance">insurance</option></select></FormField>
        <FormField label="Balance"><input name="balance" type="number" className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <div className="self-end"><Button type="submit" disabled={!loanId}>Create</Button></div>
      </form>
      <Table>
        <THead><div>Type</div><div>Balance</div></THead>
        {items.map(x=>(<TRow key={x.id}><TCell span={4}>{x.type}</TCell><TCell span={4}>${x.balance.toLocaleString()}</TCell></TRow>))}
      </Table>
    </div>
  )
}
