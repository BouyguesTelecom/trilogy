import React from 'react'
import { Button, ButtonList } from './index'

const ButtonExample = (): React.ReactNode => (
  <ButtonList>
    <Button variant='CONVERSION'>Button</Button>
    <Button variant='PRIMARY'>Button</Button>
    <Button variant='SECONDARY'>Button</Button>
    <Button disabled variant='PRIMARY'>
      Button
    </Button>
    <Button loading variant='PRIMARY'>
      Button
    </Button>
  </ButtonList>
)

export default ButtonExample
