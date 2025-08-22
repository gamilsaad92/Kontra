// api/api/cron-nightly.ts
import { runNightlyScoring } from '../src/jobs/scoring'

// No @vercel/node import needed
export default async function handler(_req: any, res: any) {
  const result = await runNightlyScoring()
  res.status(200).json({ ok: true, ...result })
}
