import { Switch } from '@trilogy-ds/react/lib/components/switch'

export default function SwitchScreen() {
  return (
    <div>
      <main>
        <Switch label='Switch one fullwidth' fullWidth name='switch one' />
        <Switch label='Switch reversed fullwidth' fullWidth reversed name='switch one' />
        <Switch label='Switch one' name='switch one' />

        <Switch label='Switch two' name='switch' />
        <Switch disabled label='Switch two disabled ' name='switch' readonly />
        <Switch disabled label='Switch two disabled' name='switch' readonly />
        <Switch reversed disabled label='Switch two reversed disabled' name='switch' readonly />
        <Switch reversed label='Switch two reversed' name='switch' readonly />
        <Switch reversed disabled label='Switch two disabled reversed ' name='switch' readonly />
      </main>
    </div>
  )
}
