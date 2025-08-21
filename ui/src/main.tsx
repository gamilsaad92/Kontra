import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AppLayout } from './shell/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { Land } from './pages/Land'
import { Market } from './pages/Market'
import { Settings } from './pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      { index: true, element: <Dashboard/> },
      { path: '/land', element: <Land/> },
      { path: '/market', element: <Market/> },
      { path: '/settings', element: <Settings/> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
