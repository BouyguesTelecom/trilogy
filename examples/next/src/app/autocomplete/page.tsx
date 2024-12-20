import { AutoComplete } from '@trilogy-ds/react/lib/components/autocomplete'
import { IconName } from '@trilogy-ds/react/lib/components/icon'
import '@trilogy-ds/styles/dist/default/trilogy.css'
export default function AutocompletePage() {
  return (
    <div>
      <main>
        <AutoComplete
          iconNameLeft={IconName.INFOS_CIRCLE}
          displayMenu={true}
          absoluteMenu
          fullwidthMenu
          placeholder='Autocomplete'
          data={[]}
        />
      </main>
    </div>
  )
}
