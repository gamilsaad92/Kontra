// api/src/index.ts
import { env } from './env'
import app from './app'

app.listen(env.PORT, () => {
  console.log(`[api] listening on http://localhost:${env.PORT}`)
})
