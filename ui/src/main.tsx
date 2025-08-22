import { createHashRouter, RouterProvider } from 'react-router-dom'
// ...
const router = createHashRouter([
  { path: '/', element: <AppLayout/>, children: [
    { index: true, element: <Dashboard/> },
    { path: '/applications', element: <Applications/> },
    { path: '/ai', element: <AiIngest/> },
    { path: '/escrows', element: <Escrows/> },
    { path: '/trading', element: <Trading/> },
    { path: '/compliance', element: <Compliance/> },
    { path: '/feedback', element: <Feedback/> },
    { path: '/land', element: <Land/> },
    { path: '/market', element: <Market/> },
    { path: '/settings', element: <Settings/> }
  ] }
])
