import { useState } from 'react'
import { Button } from '../components/Button'
import { api } from '../lib/api'
export default function Feedback(){
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)
  async function submit(){
    await api('/feedback', { method:'POST', body: JSON.stringify({ message: msg, ts: Date.now() }) })
    setOk(true); setMsg('')
  }
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Operator Feedback</h1>
      <textarea value={msg} onChange={e=>setMsg(e.target.value)} rows={5} className="w-full px-3 py-2 rounded-xl border" />
      <Button onClick={submit} disabled={!msg.trim()}>Send</Button>
      {ok && <div className="text-sm opacity-70">Thanks — logged for model improvement.</div>}
    </div>
  )
}
