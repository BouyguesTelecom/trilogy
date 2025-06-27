import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import { TabListProps, TabListRef } from '@/components/tabs/tab-list/TabListProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services'
import clsx from 'clsx'
import React from 'react'
import { useTabList } from '../hooks/useTabList'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param className
 * @param id
 * @param testId
 * @param align
 * @param others
 */
const TabList = React.forwardRef<TabListRef, TabListProps>(
  ({ children, className, id, testId, align, ...others }, ref) => {
    const {
      small,
      TabListRef,
      isVisibleArrowLeft,
      isVisibleArrowRight,
      TabElms,
      tabListWidth,
      tabsWidth,
      onClickPrev,
      onClickNext,
      handleScrollList,
    } = useTabList({ ref, children })

    const classes = hashClass(
      clsx('tab-list', align && is(getAlignClassName(align)), tabListWidth > tabsWidth && is('arrows'), className),
    )

    return (
      <div
        ref={TabListRef}
        id={id}
        data-testid={testId}
        data-tablist=''
        className={classes}
        onScroll={handleScrollList}
        {...others}
      >
        {isVisibleArrowLeft && (
          <Icon
            data-arrow-prev=''
            name='tri-arrow-left'
            className={clsx('arrow-prev')}
            size={small ? 'small' : 'medium'}
            onClick={onClickPrev}
          />
        )}
        {TabElms}
        {isVisibleArrowRight && (
          <Icon
            data-arrow-next=''
            name='tri-arrow-right'
            className={clsx('arrow-next')}
            size={small ? 'small' : 'medium'}
            onClick={onClickNext}
          />
        )}
      </div>
    )
  },
)

TabList.displayName = ComponentName.TabList
export default TabList
