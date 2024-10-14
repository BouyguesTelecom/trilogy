import React from 'react';
import { TabsItemProps } from './TabsItemProps';
import { Icon, IconColor, IconSize } from '@/components/icon';
import { useTrilogyContext } from '@/context';
import { hashClass } from '@/helpers';
import clsx from 'clsx';
import { is } from '@/services';

const TabsItem = ({ id, label, children, active, iconName, groupName, inverted, className, onClick, ...others }: TabsItemProps) => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'tab',
      inverted && is('inverted'),
      className,
    ),
  )

  return (
    <div className={classes}>
      <input
        role='tab'
        type="radio"
        id={id}
        name={groupName}
        defaultChecked={active}
        className={hashClass(styled, clsx('tab-input'))}
        onClick={(e) => onClick && onClick(e)}
        {...others}
      />
      <label className={hashClass(styled, inverted ? is('inverted') : '')} htmlFor={id}>
        {iconName && <Icon color={inverted ? IconColor.WHITE : IconColor.MAIN} size={IconSize.SMALL} name={iconName} />}
        <span className={hashClass(styled, inverted ? is('inverted') : '')}>{label}</span>
      </label>
      <div className={hashClass(styled, clsx('tab-content'))}>
        {children}
      </div>
    </div>
  )
};

export default TabsItem;




// import clsx from "clsx"
// import React, { useEffect, useState } from "react"
// import { TabsItemProps } from "./TabsItemProps"
// import { hashClass } from "@/helpers/hashClassesHelpers"
// import { useTrilogyContext } from "@/context/index"
// import { Icon } from "@/components/icon"

// /**
//  * Tabs Item Component
//  * @param active {boolean} active tab item
//  * @param children {ReactChild} React Child Element
//  * @param onClick onClick Event
//  * @param to {string} Link
//  * @param href {string} <a />
//  * @param routerLink Custom Router Link as props
//  * @param iconName {IconNameValues | IconName} add icon name
//  * @param disabled {boolean} disable tab item
//  * - -------------------------- WEB PROPERTIES -------------------------------
//  * @param className {string} Additionnal CSS Classes
//  */
// const TabsItem = React.forwardRef((props: TabsItemProps, ref: React.LegacyRef<any>) => {
//   const {
//     active,
//     children,
//     className,
//     onClick,
//     to,
//     href,
//     routerLink,
//     iconName,
//     disabled,
//     testId,
//     ...others
//   } = props

//   const [activeItem, setActiveItem] = useState<boolean>(active || false)
//   const { styled } = useTrilogyContext()

//   // accessibility
//   const a11y = {
//     a: {
//       "aria-selected": activeItem,
//       "data-tab-navigation": "",
//     },
//   }

//   useEffect(() => {
//     setActiveItem(active || false)
//   }, [active])

//   const classes = hashClass(
//     styled,
//     clsx("tab", className, { "is-active": activeItem })
//   )

//   if (routerLink && (to || href)) {
//     const RouterLink = (routerLink ? routerLink : "a") as React.ElementType
//     return (
//       <RouterLink
//         ref={ref}
//         data-testid={testId}
//         tabIndex={0}
//         {...a11y.a}
//         to={to}
//         href={href}
//         className={classes}
//         {...others}
//         onClick={(e: React.MouseEvent) => {
//           if (!disabled) {
//             const target = e.target as HTMLFormElement
//             setActiveItem(active || false)
//             target.active = active
//             if (onClick) {
//               onClick(e)
//             }
//           }
//         }}
//       >
//         <div className='tab-icon'>
//           {iconName && (
//             <Icon align='ALIGNED_CENTER' size='small' name={iconName} />
//           )}
//         </div>
//         {children}
//       </RouterLink>
//     )
//   }

//   return (
//     <button
//       ref={ref}
//       aria-disabled={disabled}
//       disabled={disabled}
//       className={classes}
//       role='tab'
//       data-testid={testId}
//       {...a11y.a}
//       {...others}
//       onClick={(e: React.MouseEvent) => {
//         if (!disabled) {
//           const target = e.target as HTMLFormElement
//           setActiveItem(active || false)
//           target.active = active
//           if (onClick) {
//             onClick(e)
//           }
//         }
//       }}
//     >
//       <div className='tab-icon'>
//         {iconName && (
//           <Icon align='ALIGNED_CENTER' size='small' name={iconName} />
//         )}
//       </div>
//       {children}
//     </button>
//   )

// })

// export default TabsItem
