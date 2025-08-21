export type ScoreResult = { loanId: string; score: number }

/**
 * Called by the Vercel cron function (api/cron-nightly.ts).
 * Do NOT use node-cron here — serverless functions are invoked by Vercel on schedule.
 */
export async function runNightlyScoring(): Promise<{ processed: number }> {
  console.log('[jobs] nightly predictive scoring started')
  // TODO:
  // 1) Fetch loans from Supabase
  // 2) Compute risk/predictive scores
  // 3) Persist results back to Supabase
  console.log('[jobs] nightly predictive scoring completed')
  return { processed: 0 }
}
