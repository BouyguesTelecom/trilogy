import React, { forwardRef, LegacyRef } from 'react'
import { TitleProps } from './TitleProps'
import TitleBase from './web/TitleBase'

interface IProps extends TitleProps {
  useClient?: boolean
}

const Title = forwardRef(({ useClient, ...others }: IProps, ref: LegacyRef<any>) => {
  switch (true) {
    case useClient !== undefined:
      const Title = React.lazy(() => import('./web/TitleClient'))
      return (
        <React.Suspense fallback={false}>
          <Title {...others} ref={ref as any} />
        </React.Suspense>
      )

    default:
      return <TitleBase {...others} />
  }
})

export default Title
