import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps, TabListRef } from '@/components/tabs/tab-list/TabListProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/objects/facets/Alignable'
import { is } from '@/services'
import clsx from 'clsx'
import React, { useMemo } from 'react'

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
    const { styled } = useTrilogyContext()
    const innerRef = React.useRef<HTMLDivElement>(null)

    const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

    const [tabsWidth, setTabsWidth] = React.useState<number>(0)
    const [tabListWidth, setTabListWidth] = React.useState<number>(0)
    const [scrollLeft, setScrollLeft] = React.useState<number>(0)

    const isVisibleArrowRight = useMemo(
      () => tabListWidth - tabsWidth - scrollLeft > 0,
      [tabListWidth, tabListWidth, scrollLeft],
    )

    const isVisibleArrowLeft = useMemo(() => scrollLeft > 0, [scrollLeft])

    const handleScrollList = React.useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      setScrollLeft((e.target as HTMLDivElement).scrollLeft)
    }, [])

    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    React.useEffect(() => {
      if (innerRef.current) {
        setTabsWidth(innerRef.current.clientWidth)
        setTabListWidth(innerRef.current.scrollWidth)
      }
    }, [innerRef])

    return (
      <>
        <Icon name='tri-arrow-left' className={clsx('arrow-prev', !isVisibleArrowLeft && 'hidden')} />
        <div ref={innerRef} id={id} data-testid={testId} className={classes} {...others} onScroll={handleScrollList}>
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return false
            return <Tab {...child.props} index={index} />
          })}
        </div>
        <Icon name='tri-arrow-right' className={clsx('arrow-next', !isVisibleArrowRight && 'hidden')} />
      </>
    )
  },
)

TabList.displayName = ComponentName.TabList
export default TabList
