import { TrilogyProvider } from '@trilogy-ds/react'
import '@trilogy-ds/styles/dist/default/trilogy.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SCREEN_ROUTES } from './src/data/screenRoutes'

const HomeScreen = React.lazy(() => import('./src/app/index'))
const screenModules = import.meta.glob<{ default: React.ComponentType }>('./src/app/*.tsx')
const routeComponents = Object.fromEntries(
  SCREEN_ROUTES.map((screen) => {
    const loadScreen = screenModules[`./src/app/${screen}.tsx`]
    if (!loadScreen) throw new Error(`No screen module found for route "${screen}"`)
    return [screen, React.lazy(loadScreen)]
  }),
)

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Missing #root element')

createRoot(rootElement).render(
  <React.StrictMode>
    <TrilogyProvider>
      <HashRouter>
        <React.Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            {SCREEN_ROUTES.map((screen) => {
              const Screen = routeComponents[screen]
              return <Route key={screen} path={`/${screen}`} element={<Screen />} />
            })}
            <Route path='*' element={<HomeScreen />} />
          </Routes>
        </React.Suspense>
      </HashRouter>
    </TrilogyProvider>
  </React.StrictMode>,
)
