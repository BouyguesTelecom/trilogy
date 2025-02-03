import { Fab } from '@trilogy-ds/react/lib/components/fab'
export default function FabSSR() {
  return (
    <div>
      <main>
        <Fab iconName='tri-alert' right={20} bottom={15}>
          New Conversation
        </Fab>
      </main>
    </div>
  )
}
