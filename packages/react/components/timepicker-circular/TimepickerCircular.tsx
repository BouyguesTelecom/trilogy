import React from 'react'
import { TimepickerCircularProps, TimepickerCircularRef } from './TimepickerCircularProps'

/**
 * TimepickerCircular Component - Web version (placeholder)
 * @description This component is not yet implemented for web.
 */
const TimepickerCircular = React.forwardRef<TimepickerCircularRef, TimepickerCircularProps>(
  (props, ref): JSX.Element => {
    console.warn('TimepickerCircular is not yet implemented for web')
    return (
      <div ref={ref}>
        TimepickerCircular - Web version coming soon
      </div>
    )
  }
)

TimepickerCircular.displayName = 'TimepickerCircular'

export default TimepickerCircular
