'use client'

import { Switch } from '@trilogy-ds/react/lib/components/switch'

export default function SwitchScreen() {
  return (
    <div>
      <main>
        <Switch
          label='Switch one fullwidth'
          fullWidth
          name='switch one'
          // eslint-disable-next-line no-console
          onChange={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
          // eslint-disable-next-line no-console
          onClick={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
        />
        <Switch
          label='Switch reversed fullwidth'
          fullWidth
          reversed
          name='switch one'
          // eslint-disable-next-line no-console
          onChange={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
          // eslint-disable-next-line no-console
          onClick={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
        />
        <Switch
          label='Switch one'
          name='switch one'
          // eslint-disable-next-line no-console
          onChange={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
          // eslint-disable-next-line no-console
          onClick={(e) => {
            console.log('SwitchState =>', e.switchState)
            console.log('SwitchSName =>', e.switchName)
          }}
        />

        <Switch
          readonly
          label='Switch two read only'
          name='switch'
          checked
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
        />
        <Switch
          disabled
          label='Switch two disabled checked'
          name='switch'
          checked
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
        />
        <Switch
          disabled
          label='Switch two disabled'
          name='switch'
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
        />
        <Switch
          reversed
          disabled
          label='Switch two reversed disabled'
          name='switch'
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
        />
        <Switch
          reversed
          label='Switch two reversed'
          name='switch'
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
        />
        <Switch
          reversed
          disabled
          label='Switch two disabled reversed checked'
          name='switch'
          // eslint-disable-next-line no-console
          onChange={(e) => console.log(e.switchState)}
          checked
        />
      </main>
    </div>
  )
}
