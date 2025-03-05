import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { SpacerProps, SpacerRef } from './SpacerProps'

/**
 * Spacer Component
 * @param size {SpacerSize} ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = React.forwardRef<SpacerRef, SpacerProps>(({ size, horizontal, className, id }, ref): JSX.Element => {
  const styles = {
    spacer: {
      marginLeft: horizontal ? `${size}px` : '0px',
      marginTop: !horizontal ? `${size}px` : '0px',
    },
  }
  const classes = hashClass(clsx(className))

  return <div ref={ref} id={id} style={styles.spacer} className={classes} />
})

Spacer.displayName = ComponentName.Spacer
export default Spacer
