const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080'

export async function api(path: string, init?: RequestInit) {
  const res = await fetch(BASE + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',           // ✅ add this
      ...(init?.headers || {}),
      'x-org-id': localStorage.getItem('orgId') || 'demo-org',
    },
  })

  // safer parse (allows empty bodies)
  const text = await res.text()
  if (!res.ok) throw new Error(text || res.statusText)
  return text ? JSON.parse(text) : {}
}
