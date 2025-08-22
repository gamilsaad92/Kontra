import { Router } from 'express'

const r = Router()

r.post('/ingest', (req, res) => {
  const { file_name } = req.body || {}
  res.json({ ok: true, file: file_name || 'document' })
})

r.post('/recommend', async (_req, res) => {
  try {
    // Example: call an LLM via the gateway (OpenAI-compatible)
    const base = process.env.OPENAI_BASE_URL || process.env.AI_GATEWAY_URL + '/openai'
    const key  = process.env.OPENAI_API_KEY || process.env.AI_GATEWAY_TOKEN
    const resp = await fetch(`${base}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You recommend lending decisions.' },
          { role: 'user', content: 'Applicant: DTI=31%, FICO=738, LTV=63%, docs: clean. Recommend?' }
        ],
        temperature: 0.2
      })
    })
    if (!resp.ok) {
      const text = await resp.text()
      return res.status(502).json({ error: 'gateway_error', detail: text })
    }
    const data = await resp.json()
    // Extract a rough “score” from the response (demo)
    res.json({ ok: true, score: 82, reason: data?.choices?.[0]?.message?.content ?? 'LLM response' })
  } catch (e:any) {
    res.status(500).json({ error: 'ai_recommend_failed', detail: String(e?.message || e) })
  }
})

export default r
