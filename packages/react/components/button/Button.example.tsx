import React from 'react'
import { ButtonList, Button } from './index'

const ButtonExample: React.ReactNode =
  <ButtonList>
    <Button
      onClick={function noRefCheck(){}}
      variant="PRIMARY"
    >
      Button
    </Button>
    <Button
      onClick={function noRefCheck(){}}
      variant="SECONDARY"
    >
      Button
    </Button>
    <Button
      disabled
      onClick={function noRefCheck(){}}
      variant="PRIMARY"
    >
      Button
    </Button>
    <Button
      loading
      onClick={function noRefCheck(){}}
      variant="PRIMARY"
    >
      Button
    </Button>
  </ButtonList>

export default ButtonExample



