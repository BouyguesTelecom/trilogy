import React from 'react'
import { TabsContext } from '../context'
import Tab from '../tab-list/tab'

interface IParams {
  ref: React.ForwardedRef<HTMLDivElement>
  children: React.ReactNode
}

export const useTabList = ({ ref, children }: IParams) => {
  try {
    const TabListRef = React.useRef<HTMLDivElement>(null)
    const tabRefs = React.useRef<DOMRect[]>([])
    const { small } = React.useContext(TabsContext)
    React.useImperativeHandle(ref, () => TabListRef.current as HTMLDivElement)

    const [tabsWidth, setTabsWidth] = React.useState<number>(0)
    const [tabListWidth, setTabListWidth] = React.useState<number>(0)
    const [scrollLeft, setScrollLeft] = React.useState<number>(0)
    const [tabFocused, setTabFocused] = React.useState<number>(0)

    const isVisibleArrowLeft = React.useMemo(() => {
      if (!tabRefs.current.length) return false
      return scrollLeft > tabRefs.current[0].width / 2
    }, [tabRefs, scrollLeft])

    const isVisibleArrowRight = React.useMemo(
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
          const nextPosition = tabRefs.current[tabFocused + direction]
          nextPosition && TabListRef.current?.scrollTo({ left: nextPosition.x - firstGap, behavior: 'smooth' })
        }
      },
      [tabRefs.current, tabFocused, TabListRef],
    )

    const handleScrollList = React.useCallback(
      (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const target = e.target as HTMLDivElement
        const firstGap = tabRefs.current[0].x + (small ? 16 : 24)

        const scrollPosition = tabRefs.current.findIndex(
          (tab) => target.scrollLeft >= tab.left - firstGap && target.scrollLeft <= tab.right - firstGap,
        )

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

    return {
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
    }
  } catch {
    return {
      small: false,
      isVisibleArrowLeft: false,
      isVisibleArrowRight: false,
      tabListWidth: 0,
      tabsWidth: 0,
      TabElms: (() =>
        React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return false
          return <Tab {...child.props} index={index} />
        }))(),
    }
  }
}
