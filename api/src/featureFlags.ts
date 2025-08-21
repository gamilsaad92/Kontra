import { env } from './env'

export function isEnabled(flag: string){
  return env.FEATURE_FLAGS.includes(flag)
}
