import React from 'react'
import { Tag, TagList } from './index'
import { Columns, ColumnsItem } from '../columns'
import { IconName } from '@/components/icon'

const TagExample: React.ReactNode = (
  <Columns>
    <ColumnsItem>
      <TagList>
        <Tag iconName={IconName.BELL} variant='ERROR'>
          Tag
        </Tag>
        <Tag iconName={IconName.ALERT} variant='SUCCESS'>
          Tag success
        </Tag>
        <Tag iconName={IconName.CHECK} variant='WARNING'>
          Tag warning
        </Tag>
        <Tag iconName={IconName.EYE} variant='INFO'>
          Tag info
        </Tag>
      </TagList>
    </ColumnsItem>
  </Columns>
)

export default TagExample
