import { FormField } from '../components/FormField'
import { Button } from '../components/Button'
import { api } from '../lib/api'

export default function Olbs(){
  const [coupon, setCoupon] = useState<number|null>(null)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  async function calculate(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload:any = {
      occupancy: Number(fd.get('occupancy')||0)
    }
    const floor = fd.get('floor')
    const cap = fd.get('cap')
    if (floor) payload.floor = Number(floor)
    if (cap) payload.cap = Number(cap)
    if (!Number.isFinite(payload.occupancy)) { setErr('Enter a valid occupancy'); return }

    setLoading(true)
    try {
      setErr('')
      const res = await api('/olbs/coupon', { method: 'POST', body: JSON.stringify(payload) })
      setCoupon(typeof res === 'object' && 'coupon' in res ? res.coupon : res)
    } catch(e:any) {
      setErr(e?.message || String(e))
      setCoupon(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">OLB Coupon</h1>
      {err && <div className="border border-red-300 bg-red-50 text-red-700 rounded-xl px-3 py-2 text-sm">{err}</div>}
      <form onSubmit={calculate} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FormField label="Occupancy"><input name="occupancy" type="number" required className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <FormField label="Floor"><input name="floor" type="number" className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <FormField label="Cap"><input name="cap" type="number" className="w-full px-3 py-2 rounded-xl border" /></FormField>
        <div className="self-end"><Button disabled={loading} type="submit">{loading ? 'Calculating…' : 'Calculate'}</Button></div>
      </form>
      {coupon !== null && <div className="text-xl">Coupon: {coupon}</div>}
    </div>
  )
}
