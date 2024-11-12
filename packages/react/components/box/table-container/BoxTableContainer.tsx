import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { BoxTableContainerProps } from './BoxTableContainerProps'

/**
 * Box Table Component
 * @param children {React.ReactNode} Children
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 * @param testId {string} Test Id for Test Integration
 */
const BoxTableContainer = ({ className, testId, ...others }: BoxTableContainerProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  return <div data-testid={testId} className={hashClass(clsx('box table-container', className))} {...others} />
}

export default BoxTableContainer
