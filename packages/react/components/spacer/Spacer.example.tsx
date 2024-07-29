import React from 'react'
import { Spacer, SpacerSize } from './index'
import { Tag } from '@/components/tag'

const SpacerExample: React.ReactNode =
  <>
    <Tag variant="SUCCESS">
      Play with the props{' '}
      <code>
        size
      </code>
    </Tag>
    <Spacer
      size={SpacerSize.SMALL}
    />
    <Tag>
      Dans le pannel de contrôle ⬇
    </Tag>
  </>

export default SpacerExample
