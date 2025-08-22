type Application = { id: string; borrower_name: string; amount: number; property_address?: string; created_at: string }
type Escrow = { id: string; loan_id: string; type: 'tax'|'insurance'; balance: number }
type Trade = { id: string; type: string; notional: number; counterparty?: string; ts: number }

export const db = {
  applications: [] as Application[],
  escrows: [] as Escrow[],
  trades: [] as Trade[],
  feedback: [] as { id: string; message: string; ts: number }[]
}

export function uid(prefix = '') { return prefix + Math.random().toString(36).slice(2,10) }

// seed a little data
db.applications.push({ id: uid('app_'), borrower_name: 'Acme Dev', amount: 250000, property_address: '123 Main St', created_at: new Date().toISOString() })
db.escrows.push({ id: uid('esc_'), loan_id: 'LN-1001', type: 'tax', balance: 1800 })
