import * as React from 'react'
import { SpacerProps, SpacerRef } from './SpacerProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context'
import { ComponentName } from '../enumsComponentsName'

/**
 * Spacer Component
 * @param size {SpacerSize} ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = React.forwardRef<SpacerRef, SpacerProps>(({ size, horizontal, className, id }, ref): JSX.Element => {
  const { styled } = useTrilogyContext()
  const styles = {
    spacer: {
      marginLeft: horizontal ? `${size}px` : '0px',
      marginTop: !horizontal ? `${size}px` : '0px',
    },
  }
  const classes = hashClass(styled, clsx(className))

  return <div ref={ref} id={id} style={styles.spacer} className={classes} />
})

Spacer.displayName = ComponentName.Spacer
export default Spacer
