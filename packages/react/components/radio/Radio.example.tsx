import React from 'react'
import { Radio } from './index'

const RadioExample: React.ReactNode =
  <>
    <Radio
      label="On peut me cocher grâce au controls ↓ "
      name="checkbox1"
      onChange={function noRefCheck(){}}
      onClick={function noRefCheck(){}}
      value="default value 1"
    />
    <Radio
      checked
      label="Je suis cochée"
      name="checkbox2"
      onClick={function noRefCheck(){}}
      value="default value 2"
    />
    <Radio
      disabled
      label="Je suis disabled"
      name="checkbox3"
      onClick={function noRefCheck(){}}
      value="default value 3"
    />
  </>

export default RadioExample;
