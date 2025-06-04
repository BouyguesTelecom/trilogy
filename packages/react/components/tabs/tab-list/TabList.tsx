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
import { TabsContext } from '../context'

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
    const TabListRef = React.useRef<HTMLDivElement>(null)
    const tabRefs = React.useRef<DOMRect[]>([])
    const { small } = React.useContext(TabsContext)
    React.useImperativeHandle(ref, () => TabListRef.current as HTMLDivElement)

    const [tabsWidth, setTabsWidth] = React.useState<number>(0)
    const [tabListWidth, setTabListWidth] = React.useState<number>(0)
    const [scrollLeft, setScrollLeft] = React.useState<number>(0)
    const [tabFocused, setTabFocused] = React.useState<number>(0)

    const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

    const isVisibleArrowLeft = useMemo(() => {
      if (!tabRefs.current.length) return false
      return scrollLeft > tabRefs.current[0].width / 2
    }, [tabRefs, scrollLeft])

    const isVisibleArrowRight = useMemo(
      () => tabListWidth - tabsWidth - scrollLeft > 5,
      [tabListWidth, tabsWidth, scrollLeft],
    )

    const TabElms = React.useMemo(() => {
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return false
        return (
          <Tab
            ref={(el) => (tabRefs.current[index] = el?.getBoundingClientRect() as DOMRect)}
            index={index}
            {...child.props}
          />
        )
      })
    }, [children, tabRefs])

    const scrollWithArrow = React.useCallback(
      (direction: number) => {
        if (tabRefs.current) {
          const firstGap = tabRefs.current[0].x
          const nextTab = tabFocused + direction
          const nextPosition = tabRefs.current[nextTab === -1 ? 0 : nextTab]
          nextPosition && TabListRef.current?.scrollTo({ left: nextPosition.x - firstGap, behavior: 'smooth' })
        }
      },
      [tabRefs.current, tabFocused, TabListRef],
    )

    const handleScrollList = React.useCallback(
      (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const target = e.target as HTMLDivElement
        const firstGap = tabRefs.current[0].x + (small ? 16 : 24)

        const scrollPosition = tabRefs.current.findIndex((tab) => {
          return target.scrollLeft >= tab.left - firstGap && target.scrollLeft <= tab.right - firstGap
        })

        setTabFocused(scrollPosition)
        setScrollLeft(target.scrollLeft)
      },
      [tabRefs, small],
    )

    const onClickPrev = React.useCallback(() => {
      isVisibleArrowLeft && scrollWithArrow(-1)
    }, [scrollWithArrow, isVisibleArrowLeft])

    const onClickNext = React.useCallback(() => {
      isVisibleArrowRight && scrollWithArrow(1)
    }, [scrollWithArrow, isVisibleArrowRight])

    const setWidths = React.useCallback(() => {
      if (TabListRef.current) {
        setTabsWidth(TabListRef.current.clientWidth)
        setTabListWidth(TabListRef.current.scrollWidth)
      }
    }, [TabListRef])

    React.useEffect(() => {
      setWidths()
    }, [setWidths, isVisibleArrowLeft, isVisibleArrowRight])

    React.useEffect(() => {
      window.addEventListener('resize', setWidths)
      return () => window.removeEventListener('resize', setWidths)
    }, [TabListRef, setWidths])

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
