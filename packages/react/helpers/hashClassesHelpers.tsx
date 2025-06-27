import React from 'react'

import { TrilogyContext } from '@/context'

/**
 * @param classes String classes
 */
export const hashClass = (classes: string): string => {
  try {
    const { hash, styled } = React.useContext(TrilogyContext)
    if (classes.trim().length < 1) return ''
    if (styled) {
      return classes
        .split(' ')
        .map((classe: string) => (classe = `${classe}_${hash}`))
        .join(' ')
    }
    return classes
  } catch {
    return classes
  }
}
