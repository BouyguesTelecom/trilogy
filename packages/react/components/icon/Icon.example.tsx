import React from 'react'
import { Icon } from './index'



const IconExample: React.ReactNode =
  <>
    <Icon
      name='tri-search'
      onClick={function noRefCheck(){}}
      size="small"
      status='SUCCESS'
    />
    <Icon
      name='tri-search'
      onClick={function noRefCheck(){}}
      size="small"
      status='SUCCESS'
      statusPosition="top"
    />
    <Icon
      name='tri-search'
      onClick={function noRefCheck(){}}
      size="small"
      status='SUCCESS'
      statusPosition="bottom"
    />
  </>

export default IconExample;
