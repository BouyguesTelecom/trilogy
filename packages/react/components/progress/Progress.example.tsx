import React from 'react'
import { Progress } from './index'

const ProgressExample: React.ReactNode = (
  <>
    <Progress status='INFO' percent={30} uniqueLegend='My unique legend' />
    <Progress status='INFO' firstExtremLegend='0 Go' percent={15} secondExtremLegend='5 Go' />
  </>
)

export default ProgressExample
