import React from 'react'

import { OnClickCallback } from '@/components/accordion/item/AccordionItemProps'
import { ClickEvent } from '@/events/OnClickEvent'

interface IParams {
  active?: boolean
  onClick?: OnClickCallback
  onClose?: ClickEvent
  onOpen?: ClickEvent
}

export const useAccordionItem = ({ active, onOpen, onClick, onClose }: IParams) => {
  try {
    const localRef = React.useRef<HTMLDetailsElement>(null)

    const [isActive, setIsActive] = React.useState<boolean>(active || false)
    const [expandedHeight, setExpandedHeight] = React.useState<string>()
    const [collapsedHeight, setCollapsedHeight] = React.useState<string>()

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLDetailsElement>) => {
      if (onOpen && !isActive) onOpen(e)
      if (onClose && isActive) onClose(e)
      if (onClick) onClick(e)
    }, [])

    // Faire à l'avance un pré-calcul de la hauteur de l'accordéon plié et déplié,
    // Ces infos sont enregistrées dans les data-attributs "data-collapsed" et "data-expanded".
    // Nécessaire quand l'accordion est consommé par un parent où un traitement supplémentaire
    // est requis comme un scrollTo par exemple. Dans ce cas là on transmet au component react
    // un événement onClick qui initie le scrollTo en amont de déclencher le toggle.
    // C'est-à-dire avant que l'accordion a été rendu dans son état déplié.

    React.useEffect(() => {
      const e = localRef.current
      if (!e) {
        return
      }
      const { floor, abs } = Math
      const firstChild = e?.children[1]?.firstChild as HTMLElement
      const expandedInactive = floor(abs(e.clientHeight + firstChild?.clientHeight)).toString()
      const expandedActive = floor(abs(e.clientHeight)).toString()
      const collapsedInactive = floor(abs(e.clientHeight + 1)).toString()
      const collapsedActive = floor(abs(e.children[0].clientHeight)).toString()
      setExpandedHeight(isActive ? expandedActive : expandedInactive)
      setCollapsedHeight(isActive ? collapsedActive : collapsedInactive)
    }, [isActive])

    React.useEffect(() => {
      setIsActive(active || false)
    }, [active])

    return { isActive, collapsedHeight, expandedHeight, localRef, handleClick }
  } catch {
    return { isActive: active }
  }
}
