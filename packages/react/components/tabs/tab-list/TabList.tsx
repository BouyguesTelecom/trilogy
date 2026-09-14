import { ComponentName } from '@/components/enumsComponentsName'
import { Icon } from '@/components/icon'
import Tab from '@/components/tabs/tab-list/tab/Tab'
import { TabListProps, TabListRef } from '@/components/tabs/tab-list/TabListProps'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import { getAlignClassName } from '@/helpers/alignable'
import { is } from '@/helpers/classify'
import clsx from 'clsx'
import { useMemo, forwardRef, useRef, useContext, useImperativeHandle, useState, Children, isValidElement, useCallback, useEffect } from 'react'
import { TabsContext } from '@/components/tabs/context'

/**
 * Tabs Nav Component
 * @param children {ReactChild} React Child Element
 * @param id {string} Custom id attribute
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param align {string} Alignment of the tabs
 */
const TabList = forwardRef<TabListRef, TabListProps>(
  ({ children, className, id, testId, align, ...others }, ref) => {
    const { styled } = useTrilogyContext()
    const TabListRef = useRef<HTMLDivElement>(null)
    const tabRefs = useRef<DOMRect[]>([])
    const { small } = useContext(TabsContext)
    useImperativeHandle(ref, () => TabListRef.current as HTMLDivElement)

    const [tabsWidth, setTabsWidth] = useState<number>(0)
    const [tabListWidth, setTabListWidth] = useState<number>(0)
    const [scrollLeft, setScrollLeft] = useState<number>(0)
    const [tabFocused, setTabFocused] = useState<number>(0)

    const classes = hashClass(styled, clsx('tab-list', align && is(getAlignClassName(align)), className))

    const isVisibleArrowLeft = useMemo(() => {
      if (!tabRefs.current.length) return false
      return scrollLeft > tabRefs.current[0].width / 2
    }, [tabRefs, scrollLeft])

    const isVisibleArrowRight = useMemo(
      () => tabListWidth - tabsWidth - scrollLeft > 5,
      [tabListWidth, tabsWidth, scrollLeft],
    )

    const TabElms = useMemo(() => {
      return Children.map(children, (child, index) => {
        if (!isValidElement(child)) return false
        return (
          <Tab
            ref={(el) => (tabRefs.current[index] = el?.getBoundingClientRect() as DOMRect)}
            index={index}
            {...child.props}
          />
        )
      })
    }, [children, tabRefs])

    const scrollWithArrow = useCallback(
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

    const handleScrollList = useCallback(
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

    const onClickPrev = useCallback(() => {
      isVisibleArrowLeft && scrollWithArrow(-1)
    }, [scrollWithArrow, isVisibleArrowLeft])

    const onClickNext = useCallback(() => {
      isVisibleArrowRight && scrollWithArrow(1)
    }, [scrollWithArrow, isVisibleArrowRight])

    const setWidths = useCallback(() => {
      if (TabListRef.current) {
        setTabsWidth(TabListRef.current.clientWidth)
        setTabListWidth(TabListRef.current.scrollWidth)
      }
    }, [TabListRef])

    useEffect(() => {
      setWidths()
    }, [setWidths, isVisibleArrowLeft, isVisibleArrowRight])

    useEffect(() => {
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
