import * as React from 'react'
import { Section, AutoLayout, Selector, SelectorItem, SpacerSize } from '@trilogy-ds/react/components'
import { Alignable } from '@trilogy-ds/react/objects'

export const SelectorView = (): JSX.Element => {
  return (
    <Section>
      <AutoLayout edgeSize={SpacerSize.FOUR} edges={['top', 'bottom']}>
        <Selector
          activeIndex={1}
          align={Alignable.ALIGNED_CENTER}
        >
          <SelectorItem>
            Selector One
          </SelectorItem>
          <SelectorItem>
            Selector Two
          </SelectorItem>
          <SelectorItem>
            Selector Three
          </SelectorItem>
        </Selector>
      </AutoLayout>
    </Section>
  )
}
