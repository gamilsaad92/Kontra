// ui/src/App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppLayout } from './shell/AppLayout'
import { Dashboard } from './pages/Dashboard'       // <-- named import
import Applications from './pages/Applications'
import AiIngest from './pages/AiIngest'
import Escrows from './pages/Escrows'
import Trading from './pages/Trading'
import Compliance from './pages/Compliance'
import Feedback from './pages/Feedback'
import { Land } from './pages/Land'                  // <-- named import
import { Market } from './pages/Market'              // <-- named import
import { Settings } from './pages/Settings'          // <-- named import

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/ai" element={<AiIngest />} />
          <Route path="/escrows" element={<Escrows />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/land" element={<Land />} />
          <Route path="/market" element={<Market />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
