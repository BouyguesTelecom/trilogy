import { Section, Switch } from '@trilogy-ds/react/components'
import { StatusState } from '@trilogy-ds/react/objects'
import * as React from 'react'

export const SwitchScreen = (): JSX.Element => {
  const [checked, setChecked] = React.useState(true)
  return (
    <Section>
      <Switch
        checked={checked}
        status={StatusState.ERROR}
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
        label='Switch two'
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
        readonly
      />
      <Switch
        disabled
        label='Switch two disabled'
        name='switch'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        disabled
        label='Switch two reversed disabled'
        name='switch'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        label='Switch two reversed'
        name='switch'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
      />
      <Switch
        reversed
        disabled
        label='Switch two disabled reversed checked'
        name='switch'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.switchState)}
        readonly
        checked
      />
    </Section>
  )
}
