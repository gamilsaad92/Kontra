// ui/src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter, // or switch to createHashRouter if you didn't add a SPA rewrite
  RouterProvider,
} from 'react-router-dom'

import { AppLayout } from './shell/AppLayout'
import { Dashboard } from './pages/Dashboard'
import Applications from './pages/Applications'
import AiIngest from './pages/AiIngest'
import Escrows from './pages/Escrows'
import Trading from './pages/Trading'
import Compliance from './pages/Compliance'
import Feedback from './pages/Feedback'
import { Land } from './pages/Land'
import { Market } from './pages/Market'
import { Settings } from './pages/Settings'
import { FeatureProvider } from './featureFlags'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/applications', element: <Applications /> },
      { path: '/ai', element: <AiIngest /> },
      { path: '/escrows', element: <Escrows /> },
      { path: '/trading', element: <Trading /> },
      { path: '/compliance', element: <Compliance /> },
      { path: '/feedback', element: <Feedback /> },
      { path: '/land', element: <Land /> },
      { path: '/market', element: <Market /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeatureProvider>
      <RouterProvider router={router} />
    </FeatureProvider>
  </React.StrictMode>
)
