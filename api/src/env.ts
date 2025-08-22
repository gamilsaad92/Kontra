export const env = {
  PORT: parseInt(process.env.PORT || '8080', 10),
  FEATURE_FLAGS: (process.env.FEATURE_FLAGS || 'trading,analytics,compliance')
    .split(',').map(s=>s.trim()).filter(Boolean)
}
