import { createContext, useContext, useMemo } from 'react'
const defaults = (import.meta.env.VITE_FEATURE_FLAGS || 'trading,collections,asset_management,voice_bot,analytics,compliance')
  .split(',').map(s=>s.trim()).filter(Boolean)
const Ctx = createContext<string[]>(defaults)
export function FeatureProvider({children}:{children:React.ReactNode}){
  const override = (localStorage.getItem('featureFlags')||'').split(',').map(s=>s.trim()).filter(Boolean)
  const flags = useMemo(()=> override.length ? override : defaults, [override.join(',')])
  return <Ctx.Provider value={flags}>{children}</Ctx.Provider>
}
export function useFeature(flag:string){ return useContext(Ctx).includes(flag) }
export function FeatureGuard({flag, children}:{flag:string; children:React.ReactNode}){
  return useFeature(flag) ? <>{children}</> : <div className="text-sm opacity-60">Feature <b>{flag}</b> is disabled.</div>
}
