import React from 'react'
import { Radio } from './index'

const RadioExample: React.ReactNode =
  <div>
    <Radio
      label="On peut me cocher grâce au controls ↓ "
      name="checkbox1"
      value="default value 1"
    />
    <Radio
      checked
      label="Je suis cochée"
      name="checkbox2"
      value="default value 2"
    />
    <Radio
      disabled
      label="Je suis disabled"
      name="checkbox3"
      value="default value 3"
    />
  </div>

export default RadioExample;
