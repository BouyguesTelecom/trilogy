import React from 'react'
import { Tag, TagList } from './index'
import { Columns, ColumnsItem } from '../columns'

const TagExample: React.ReactNode =

<Columns>
    <ColumnsItem>
        <TagList>
            <Tag
                iconName='tri-alert'
                variant='ERROR'
            >
                Tag
            </Tag>
            <Tag
                iconName='tri-bell'
                variant='SUCCESS'
            >
                Tag success
            </Tag>
            <Tag
                iconName='tri-check'
                variant='WARNING'
            >
                Tag warning
            </Tag>
        </TagList>
    </ColumnsItem>
</Columns>

export default TagExample
