import cron from 'node-cron'

export function scheduleNightlyScoring(){
  // Every night at 2:15am
  cron.schedule('15 2 * * *', async () => {
    try {
      console.log('[jobs] nightly predictive scoring started')
      // TODO: fetch loans; compute scores; persist results
      console.log('[jobs] nightly predictive scoring completed')
    } catch (e){
      console.error('[jobs] nightly predictive scoring failed', e)
    }
  })
}
