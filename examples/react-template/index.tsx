import { TrilogyProviderStyled } from '@trilogy-ds/react/context/providerStyled'
import '@trilogy-ds/styles/dist/default/trilogy.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Router } from './router'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <TrilogyProviderStyled mangled>
      <HashRouter>
        <Router />
      </HashRouter>
    </TrilogyProviderStyled>
  </React.StrictMode>,
)
