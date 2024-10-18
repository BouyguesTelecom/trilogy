import React from 'react'
import { Icon } from './index'

const IconExample: React.ReactNode =
  <>
    <Icon
      name='tri-search'
      size='medium'
      status='SUCCESS'
    />
    <Icon
      name='tri-check'
      size='medium'
      status='SUCCESS'
      statusPosition='top'
    />
    <Icon
      name='tri-bell'
      size='medium'
      status='SUCCESS'
      statusPosition='bottom'
    />
  </>

export default IconExample
