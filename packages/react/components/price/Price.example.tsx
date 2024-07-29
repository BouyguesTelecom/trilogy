import React from 'react'
import { Price } from './index'

const PriceExample: React.ReactNode =

  <Price
    align="ALIGNED_START"
    amount={24.99}
    period="mois"
    showCents
  />

export default PriceExample;
