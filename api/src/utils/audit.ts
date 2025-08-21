import { supabase } from '../supabase'

export async function audit(event: string, payload: any, orgId: string){
  try {
    await supabase.from('audit_logs').insert({ event, payload, org_id: orgId })
  } catch (e:any) {
    console.error('[audit] failed', e.message)
  }
}
