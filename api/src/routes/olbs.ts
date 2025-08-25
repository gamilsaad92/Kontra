import { Router } from 'express'

// Occupancy-linked bond coupon calculator
// Formula: baseRate + (occupancyRate - 0.60) * 0.10
// Optional query params: baseRate (decimal), floor, cap

const r = Router()

r.get('/coupon', (req, res) => {
  const occupancy = Number(req.query.occupancy)
  const baseRate = req.query.baseRate ? Number(req.query.baseRate) : 0.03
  const floor = req.query.floor ? Number(req.query.floor) : undefined
  const cap = req.query.cap ? Number(req.query.cap) : undefined

  if (isNaN(occupancy)) {
    return res.status(400).json({ error: 'occupancy query param required' })
  }

  let coupon = baseRate + (occupancy - 0.6) * 0.1
  if (floor !== undefined) coupon = Math.max(coupon, floor)
  if (cap !== undefined) coupon = Math.min(coupon, cap)

  res.json({ coupon })
})

export default r
