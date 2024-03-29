import React from 'react'
import clsx from 'clsx'
import { ColumnsProps } from './ColumnsProps'
import { is } from '../../services/classify'
import { hashClass } from '../../helpers'
import { useTrilogyContext } from '../../context'

/**
 * Columns Component
 * @param centered {boolean} Center columns
 * @param verticalCentered {boolean} Vertical centered columns
 * @param gapless {boolean} Delete margins between columns
 * @param marginSize {ColumnsSize} Delete margins between columns with Size (apply is-variable)
 * @param inlined {boolean} Make colomns scrollable to vertical
 * @param children {React.ReactNode}
 * @param marginless {boolean}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param multiline {boolean} Multiline Columns
 * @param className {string} Additionnal CSS Classes
 * @param mobile {boolean} Responsive mode
 * @param flex {boolean} Flex direction
 */
const Columns = ({
  className,
  multiline,
  inlined,
  mobile,
  centered,
  verticalCentered,
  gapless,
  marginSize,
  flex,
  marginless,
  ...others
}: ColumnsProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = hashClass(
    styled,
    clsx(
      'columns',
      multiline && is('multiline'),
      inlined && is('inlined'),
      mobile && is('mobile'),
      centered && is('centered'),
      verticalCentered && is('vcentered'),
      !marginSize && gapless && is('gapless'),
      !gapless && marginSize && [is('variable'), is(`${marginSize}`)],
      flex && is('flex'),
      marginless && is('marginless'),
      className,
    ),
  )

  return <div className={classes} {...others} />
}

export default Columns
