import { TrilogyProviderStyled } from '@trilogy-ds/react/context/styledProvider/providerStyled'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Router } from './router'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <TrilogyProviderStyled>
      <HashRouter>
        <Router />
      </HashRouter>
    </TrilogyProviderStyled>
  </React.StrictMode>,
)
