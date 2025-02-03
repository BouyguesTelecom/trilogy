'use client'

import { AutoComplete } from '@trilogy-ds/react/lib/components/autocomplete'
import { IconName } from '@trilogy-ds/react/lib/components/icon'
import { InputChangeEventWeb, InputClickEvent } from '@trilogy-ds/react/lib/components/input/InputProps'
import '@trilogy-ds/styles/dist/default/trilogy.css'
import React from 'react'
export default function AutocompletePage() {
  const [value, setValue] = React.useState<string>('')
  const [data] = [['name', 'age', 'car', 'test', 'trilogy']]

  const onChange = (e: InputChangeEventWeb) => {
    console.log('OnChange Autocomplete : ', e)
    setValue(e.inputValue)
  }

  const onIconClick = (e: InputClickEvent) => {
    console.log('onIconClick Autocomplete : ', e)
  }

  return (
    <div>
      <main>
        <AutoComplete
          iconNameLeft={IconName.INFOS_CIRCLE}
          displayMenu={true}
          value={value}
          data={data}
          absoluteMenu
          fullwidthMenu
          placeholder='Autocomplete'
          onItemSelected={(e) => {
            setValue(e.value || '')
            console.log('onItemSelected : ', e.value)
          }}
          onChange={onChange}
          onIconClick={onIconClick}
          onFocus={(e) => console.log('FOCUS : ', e)}
          onBlur={(e) => console.log('BLUR : ', e)}
        />
      </main>
    </div>
  )
}
