import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from './router'
import { HashRouter } from 'react-router-dom'
import { TrilogyProviderStyled } from "@trilogy-ds/react/context/providerStyled";

ReactDOM.render(
  <React.StrictMode>
    <TrilogyProviderStyled>
      <HashRouter>
        <Router></Router>
      </HashRouter>
    </TrilogyProviderStyled>
  </React.StrictMode>,
  document.getElementById('root'),
)
