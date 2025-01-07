import { Chips, ChipsList } from '@trilogy-ds/react/lib/components/chips'

export default function ChipsSSR() {
  return (
    <div>
      <main>
        <ChipsList scrollable multiple>
          <Chips id='1'>Chips 1</Chips>
          <Chips>Chips 2</Chips>
          <Chips>Chips 3</Chips>
          <Chips disabled>Chips 4</Chips>
        </ChipsList>
      </main>
    </div>
  )
}
