import { useState } from 'react'
import { Button } from '../components/Button'
import { FormField } from '../components/FormField'
import { api } from '../lib/api'
export default function AiIngest(){
  const [status, setStatus] = useState('')
  async function onUpload(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const file = (fd.get('file') as File)
    if(!file) return
    const bytes = await file.arrayBuffer()
    const base64 = btoa(String.fromCharCode(...new Uint8Array(bytes)))
    const payload = { file_name: file.name, mime: file.type, bytes_base64: base64 }
    const res = await api('/ai/ingest', { method:'POST', body: JSON.stringify(payload) })
    setStatus(`Queued ${res.file}`)
  }
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">AI Document Ingest</h1>
      <form onSubmit={onUpload} className="grid md:grid-cols-3 gap-4">
        <FormField label="Upload file"><input name="file" type="file" required className="block w-full text-sm" /></FormField>
        <div className="self-end"><Button type="submit">Queue OCR/Parse</Button></div>
      </form>
      {status && <div className="text-sm opacity-70">{status}</div>}
    </div>
  )
}
