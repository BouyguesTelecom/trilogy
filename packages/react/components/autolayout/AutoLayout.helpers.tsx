/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import type { HandleBetweenChildren, ParseChildren } from '@/components/autolayout/AutoLayout.d'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import type { TrilogyComponents } from '@/components/index.d'
import { Spacer, SpacerSize } from '@/components/spacer'

/**
 * Test if an element is a React Fragment
 *
 * @param element
 * @returns
 */
export const isFragment = (element: React.ReactElement): boolean => element?.type === React.Fragment

const getTrilogyComponentName = (child: any): string | undefined => {
  const componentsKeys = Object.keys(ComponentName).filter((key) => key)
  return componentsKeys.find((key) => key === child?.type?.render?.displayName || key === child?.type?.displayName)
}

/**
 * Test if an element is of a certain component type
 *
 * @param element
 * @param componentType
 * @returns
 */
export const isElementType = (element: React.ReactElement, componentType: TrilogyComponents): boolean =>
  (element?.type as any)?.render?.displayName === componentType || (element?.type as any)?.displayName === componentType

/**
 * Iterate over children and apply the `handleBetweenChildren` method.
 */

export const parseChildren = ({ children, handleBetweenChildren }: ParseChildren): JSX.Element[] => {
  const array: JSX.Element[] = [] // React.Children.toArray(children)
  createChildrenArray(array, children)

  return array.reduce((accumulator, nextChild, childIndex) => {
    const previousChild = accumulator[accumulator.length - 1]

    // Check the actual type of previous and next children

    const getChildCandidateToComparison = (
      child: React.ReactElement,
      accumulator?: JSX.Element[],
    ): React.ReactElement => {
      if (isElementType(child, 'AutoLayout')) {
        return getChildCandidateToComparison(React.Children.toArray(child.props.children)[0] as React.ReactElement)
      }
      if (child === null && accumulator && accumulator.length >= 2) {
        return getChildCandidateToComparison(accumulator[accumulator.length - 2], accumulator.slice(0, -1))
      }

      return child
    }

    const nextChildType: TrilogyComponents | undefined =
      (getChildCandidateToComparison(nextChild)?.type as any)?.render?.displayName ||
      (getChildCandidateToComparison(nextChild)?.type as any)?.displayName ||
      undefined

    const previousChildType: TrilogyComponents | undefined =
      (getChildCandidateToComparison(previousChild, accumulator)?.type as any)?.render?.displayName ||
      (getChildCandidateToComparison(previousChild, accumulator)?.type as any)?.displayName ||
      undefined

    handleBetweenChildren?.({
      accumulator,
      previousChild,
      previousChildType,
      nextChild,
      nextChildType,
      childIndex,
    })

    // Concat the previous accumulated elements and the next one
    return [
      ...accumulator,
      nextChild &&
        React.cloneElement(nextChild, {
          key: nextChild.key || `child${childIndex}`,
        }),
    ]
  }, [] as JSX.Element[])
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const autoLayoutChildrenHandler = (
  matrix: SpacingMatrix,
  { accumulator, previousChildType, nextChildType, childIndex }: HandleBetweenChildren,
): void => {
  const eligibleRule = (mode: SpacingMatrixMode) =>
    [SpacingMatrixMode.INSERT_SPACE_BETWEEN, SpacingMatrixMode.INSERT_ELEMENT_BETWEEN].includes(mode)

  let alreadySpaced = false

  const rules = matrix.filter((e) => eligibleRule(e[0]))

  rules.forEach((rule) => {
    const [mode, previousType, nextType, value] = rule

    const isRuleApplicable = checkRuleApplicable(
      previousType,
      nextType,
      previousChildType,
      nextChildType,
      alreadySpaced,
    )

    if (isRuleApplicable) {
      alreadySpaced = true
      if (mode === SpacingMatrixMode.INSERT_SPACE_BETWEEN) {
        accumulator.push(<Spacer key={`spacer${childIndex}`} size={value as SpacerSize} />)
      } else if (mode === SpacingMatrixMode.INSERT_ELEMENT_BETWEEN) {
        accumulator.push(value as JSX.Element)
      }
    }
  })
}

const createChildrenArray = (array: JSX.Element[], children: React.ReactNode): void => {
  React.Children.forEach(children, (child: any) => {
    if (isFragment(child)) {
      React.Children.forEach(child?.props.children, (item) => {
        createChildrenArray(array, item)
      })
    } else if (
      child?.type &&
      child?.type?.displayName !== getTrilogyComponentName(child) &&
      child?.type?.$$typeof === undefined
    ) {
      createChildrenArray(array, child.type(child.props))
    } else if (
      child?.type &&
      child?.type?.displayName !== getTrilogyComponentName(child) &&
      child?.type?.$$typeof === Symbol.for('react.memo')
    ) {
      createChildrenArray(array, child.type.type(child.props))
    } else if (
      child?.type &&
      child?.type?.$$typeof === Symbol.for('react.forward_ref') &&
      child?.type?.render?.displayName !== getTrilogyComponentName(child)
    ) {
      createChildrenArray(array, child.type.type(child.props))
    } else {
      array.push(child as JSX.Element)
    }
  })
}

const checkRuleApplicable = (
  previousType: TrilogyComponents | undefined | 'default',
  nextType: TrilogyComponents | undefined | 'default',
  previousChildType: TrilogyComponents | undefined,
  nextChildType: TrilogyComponents | undefined,
  alreadySpaced: boolean,
): boolean => {
  if (previousChildType === undefined || nextChildType === undefined) {
    return false
  }
  if (alreadySpaced) {
    return false
  } else if (
    (previousType === previousChildType && nextType === nextChildType) ||
    (previousType === 'default' && nextType === nextChildType) ||
    (previousType === previousChildType && nextType === 'default') ||
    (previousType === 'default' && nextType === 'default')
  ) {
    return true
  }
  return false
}
