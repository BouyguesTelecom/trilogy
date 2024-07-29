import React from 'react'
import { Popover } from './index'
import { Button } from '@/components/button'

const PopoverExample: React.ReactNode =

  <Popover content="Voici une simple popover">
    <Button variant="PRIMARY">
      Simple Popover
    </Button>
  </Popover>

export default PopoverExample;
