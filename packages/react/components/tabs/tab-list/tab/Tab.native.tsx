import { ComponentName } from '@/components/enumsComponentsName'
import { TabsContext } from '@/components/tabs/context'
import { TabProps } from '@/components/tabs/tab-list/tab/TabProps'
import { Text } from '@/components/text'
import React from 'react'

/**
 * Tabs Item Component
 * @param active {boolean} active tab item
 * @param children {ReactChild} React Child Element
 * @param onClick onClick Event
 * @param iconName {IconNameValues | IconName} add icon name
 * @param disabled {boolean} disable tab item
 * @param label {string} Tab content
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 * @param to {string} Link
 * @param href {string} <a />
 * @param routerLink Custom Router Link as props
 */
const Tab = ({
  active,
  className,
  onClick,
  to,
  href,
  routerLink,
  iconName,
  label,
  disabled,
  testId,
  ariaControls,
  ...others
}: TabProps) => {
  const { index, ...props } = others as any
  const { activeIndex, setActiveIndex } = React.useContext(TabsContext)

  const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      setActiveIndex(index)
      if (!disabled && onClick) onClick(e)
    },
    [disabled, onClick, index, setActiveIndex],
  )

  React.useEffect(() => {
    if (active) setActiveIndex(index)
  }, [active, setActiveIndex, index])

  if (routerLink && (to || href)) {
    const RouterLink = (routerLink ? routerLink : 'a') as React.ElementType
    return <Text>{label && label}</Text>
  }

  return <Text>{label && label}</Text>
}

Tab.displayName = ComponentName.Tab
export default Tab
