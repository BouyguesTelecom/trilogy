import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import * as Screens from '../screens'
import { Wrapper } from '../Wrapper'
import { MenuScreen } from '../Menu'

export const Router = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Routes>
      {Object.keys(Screens).map((screen, index) => {
        const [pathName] = screen.split('Screen')
        const Element = Screens[screen]
        return (
          <Route
            key={index}
            path={pathName}
            element={
              <Wrapper title={pathName}>
                <Element />
              </Wrapper>
            }
          />
        )
      })}

      <Route path='/' element={<MenuScreen navigation={{ navigate }} />} />
      <Route path='*' element={<div>Aucun composant</div>} />
    </Routes>
  )
}
