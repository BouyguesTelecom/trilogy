import React from 'react'

import { Meta, Story } from '@storybook/react'
import { Progress, ProgressItem } from './index'
import { ProgressProps } from './ProgressProps'
import { AlertState } from '../../objects'

export default {
  title: 'Components/ProgressBar',
  component: Progress,
} as Meta

export const Base: Story<ProgressProps> = (args) => (
  /* L'utilisation de la progress bar Circulaire nécessite l'injection de Trilogy-Vanilla pour fonctioner :
 <script id='vanilla-script' lib="https://assets.bouyguestelecom.fr/TRILOGY/trilogy-vanilla@3.2.0/trilogy-vanilla.min.js"></script>
*/
  <>
    <Progress {...args} />
    <Progress percent={20} alert='INFO' />
    <Progress percent={40} alert='WARNING' />
    <Progress percent={60} alert='ERROR' />
    <Progress percent={80} alert='SUCCESS' />
  </>
)
Base.args = {
  percent: 10,
}

export const Empilé: Story<ProgressProps> = (args) => (
  <Progress {...args}>
    <ProgressItem percent={10} alert={AlertState.SUCCESS} accessibilityLabel={'progress-sucess'} />
    <ProgressItem percent={15} alert={AlertState.INFO} accessibilityLabel={'progress-info'} />
    <ProgressItem percent={35} alert={AlertState.WARNING} accessibilityLabel={'progress-warning'} />
    <ProgressItem percent={25} alert={AlertState.ERROR} accessibilityLabel={'progress-error'} />
  </Progress>
)
Empilé.args = {
  stacked: true,
}

export const AvecLégende: Story<ProgressProps> = (args) => (
  <>
    <Progress {...args} />
    <Progress percent={15} alert={AlertState.INFO} firstExtremLegend='0 Go' secondExtremLegend='5 Go' />
  </>
)
AvecLégende.args = {
  percent: 30,
  alert: AlertState.INFO,
  uniqueLegend: 'My unique legend',
}

export const Petite: Story<ProgressProps> = (args) => <Progress {...args} />
Petite.args = {
  percent: 30,
  alert: AlertState.INFO,
  small: true,
}
