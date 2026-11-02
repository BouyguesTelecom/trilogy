import React from "react"
import { createRoot } from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router-dom"

import { SCREEN_ROUTES } from "./src/data/screenRoutes"

import "@trilogy-ds/styles/dist/default/trilogy.css"

const HomeScreen = () => (
  <main style={{ padding: 24, fontFamily: "sans-serif" }}>
    <h1>Trilogy Explorer</h1>
    <ul>
      {SCREEN_ROUTES.map((screen) => (
        <li key={screen}>
          <a href={`#/${screen}`}>{screen}</a>
        </li>
      ))}
    </ul>
  </main>
)

const screenModules = import.meta.glob<{ default: React.ComponentType }>([
  "./src/app/*.tsx",
  "!./src/app/_*.tsx",
])

const routeComponents = Object.fromEntries(
  SCREEN_ROUTES.map((screen) => {
    const loadScreen = screenModules[`./src/app/${screen}.tsx`]
    if (!loadScreen)
      throw new Error(`No screen module found for route "${screen}"`)
    return [screen, React.lazy(loadScreen)]
  })
)

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Missing #root element")

createRoot(rootElement).render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {SCREEN_ROUTES.map((screen) => {
            const Screen = routeComponents[screen]
            return (
              <Route key={screen} path={`/${screen}`} element={<Screen />} />
            )
          })}
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>
)
