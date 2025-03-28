import * as React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
/* eslint import/namespace: ['error', { allowComputed: true }] */
import { AutoLayout, Section, View } from '@trilogy-ds/react'
import { MenuScreen } from '../Menu/Menu'
import * as Screens from '../screens'
import { Wrapper } from '../Wrapper'

export const Router = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <View markup='main' className='main-content'>
      <AutoLayout>
        <Section inverted>
          <Routes>
            {Object.keys(Screens).map((screen, index) => {
              const [pathName] = screen.split('Screen')
              const Element = Screens[screen]
              return (
                <Route
                  key={index}
                  path={pathName}
                  element={
                    <Wrapper title={pathName} goBack={() => history.back()} scrollable={false}>
                      <Element />
                    </Wrapper>
                  }
                />
              )
            })}

            <Route path='/' element={<MenuScreen navigation={{ navigate }} />} />
            <Route path='*' element={<div>Aucun composant</div>} />
          </Routes>
        </Section>
      </AutoLayout>
    </View>
  )
}
