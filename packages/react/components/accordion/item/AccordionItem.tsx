import React, { useEffect, useRef, useState } from "react"
import shortid from "shortid"
import { AccordionItemProps } from "./AccordionItemProps"
import clsx from "clsx"
import { hashClass } from "@/helpers"
import { useTrilogyContext } from "@/context"

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param className {string} Additionnal CSS Classes
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode}
 * @param onOpen {Function} onOpen Accordion Item Function
 * @param onClose {Function} onClose Accordion Item Function
 */
const AccordionItem = ({
  active,
  className,
  children,
  id = shortid.generate(),
  onClick,
  disabled,
  onClose,
  onOpen,
  ...others
}: AccordionItemProps): JSX.Element => {
  const ref = useRef<HTMLDetailsElement>(null)
  const { styled } = useTrilogyContext()

  const [isActive, setIsActive] = useState<boolean>(active || false)
  const [expandedHeight, setExpandedHeight] = useState<string>()
  const [collapsedHeight, setCollapsedHeight] = useState<string>()

  // Faire à l'avance un pré-calcul de la hauteur de l'accordéon plié et déplié,
  // Ces infos sont enregistrées dans les data-attributs "data-collapsed" et "data-expanded".
  // Nécessaire quand l'accordion est consommé par un parent où un traitement supplémentaire
  // est requis comme un scrollTo par exemple. Dans ce cas là on transmet au component react
  // un événement onClick qui initie le scrollTo en amont de déclencher le toggle.
  // C'est-à-dire avant que l'accordion a été rendu dans son état déplié.

  useEffect(() => {
    const e = ref.current
    if (!e) {
      return
    }
    const { floor, abs } = Math
    const firstChild = e?.children[1]?.firstChild as HTMLElement
    const expandedInactive = floor(
      abs(e.clientHeight + firstChild?.clientHeight)
    ).toString()
    const expandedActive = floor(abs(e.clientHeight)).toString()
    const collapsedInactive = floor(abs(e.clientHeight + 1)).toString()
    const collapsedActive = floor(abs(e.children[0].clientHeight)).toString()
    setExpandedHeight(isActive ? expandedActive : expandedInactive)
    setCollapsedHeight(isActive ? collapsedActive : collapsedInactive)
  }, [isActive])

  useEffect(() => {
    setIsActive(active || false)
  }, [active])

  const classes = hashClass(
    styled,
    clsx("accordion", className)
  )

  let childrenElement
  if (children) {
    childrenElement = Array.isArray(children)
      ? children.map((child, index: number) => {
        return React.cloneElement(child as React.ReactElement, {
          key: `article-${index}`,
          disabled,
        })
      })
      : children
  }

  const ariaProps: { "aria-disabled"?: boolean, tabIndex?: number } = {}

  if (disabled) {
    ariaProps["tabIndex"] = -1
    ariaProps["aria-disabled"] = true
  }

  return (
    <details
      open={isActive}
      {...ariaProps}
      data-testid={id}
      className={classes}
      ref={ref}
      id={id}
      {...others}
      data-collapsed={collapsedHeight}
      data-expanded={expandedHeight}
      onClick={(e) => {
        if (onOpen && !isActive) onOpen(e)
        if (onClose && isActive) onClose(e)
        if (onClick) onClick(e)
      }}
    >
      {childrenElement}
    </details>
  )
}

export default AccordionItem
