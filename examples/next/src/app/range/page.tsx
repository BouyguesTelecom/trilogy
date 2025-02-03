import { Range } from '@trilogy-ds/react/lib/components/range'

export default function RangeSSR() {
  return (
    <div>
      <main>
        <Range
          min={0}
          max={100}
          unit={'%'}
          valueMin={0}
          valueMax={100}
          label='Ceci est un label'
          id={'test'}
          name='name-range'
          gap={2}
        />
      </main>
    </div>
  )
}
