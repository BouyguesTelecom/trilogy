import React from 'react'
import Checkbox from '@/components/checkbox/Checkbox'

const CheckboxExample: React.ReactNode = <>
  <Checkbox
    label="On peut me cocher grâce au controls ↓ "
    name="checkbox1"
    value="default value 1"
  />
  <Checkbox
    checked
    label="Je suis cochée"
    name="checkbox2"
    value="default value 2"
  />
  <Checkbox
    disabled
    label="Je suis disabled"
    name="checkbox3"
    value="default value 3"
  />
</>

export default CheckboxExample;
