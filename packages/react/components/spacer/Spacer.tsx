import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { SpacerProps } from './SpacerProps'

/**
 * Spacer Component
 * @param size {SpacerSize} ONE | TWO | THREE | FOUR | FIVE | SIX | SEVEN | EIGHT
 * @param horizontal {Boolean} If horizontal margin
 */
const Spacer = ({ size, horizontal, className, id }: SpacerProps): JSX.Element => {
  const styles = {
    spacer: {
      marginLeft: horizontal ? `${size}px` : '0px',
      marginTop: !horizontal ? `${size}px` : '0px',
    },
  }
  const classes = hashClass(clsx(className))

  return <div id={id} style={styles.spacer} className={classes} />
}

export default Spacer
