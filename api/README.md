# Kontra API (Serverless on Vercel)

## Deploy on Vercel (API project)
- Root Directory: `api`
- Framework Preset: Other
- Build Command: None (or `echo "no build"`)
- Output Directory: (empty)
- Env Vars: `FEATURE_FLAGS` (optional)

## Endpoints (demo, in-memory)
- GET `/api/health`
- GET `/api/openapi.json`
- POST `/api/applications`, GET `/api/applications`
- POST `/api/escrows`, GET `/api/escrows/:loanId`
- POST `/api/ai/ingest`
- GET `/api/analytics/portfolio`
- POST `/api/trades`
- POST `/api/compliance/scan`
- POST `/api/feedback`

These are wired to the UI starter I provided. Replace the in-memory `src/memdb.ts` with your persistence.
