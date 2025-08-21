const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'
export async function api(path:string, init?:RequestInit){
  const res = await fetch(BASE + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
      'x-org-id': localStorage.getItem('orgId') || 'demo-org'
    }
  })
  if(!res.ok) throw new Error(await res.text())
  return res.json()
}
