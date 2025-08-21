import type { VercelRequest, VercelResponse } from '@vercel/node'
import { runNightlyScoring } from '../src/jobs/scoring'
export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const result = await runNightlyScoring()
  res.status(200).json({ ok: true, ...result })
}
