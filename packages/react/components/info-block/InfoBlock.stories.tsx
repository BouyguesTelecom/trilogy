import React from 'react'

import {Meta, Story} from '@storybook/react'
import {InfoBlockProps} from './InfoBlockProps'
import InfoBlock from './InfoBlock'
import InfoBlockAction from './action'
import InfoBlockContent from './content'
import InfoBlockHeader from './header'
import {InfoBlockStatus} from './InfoBlockEnum'
import {Button, ButtonVariant} from '../button'
import {Text} from '../text'

export default {
  title: 'Components/InfoBlock',
  component: InfoBlock,
  subcomponents: {InfoBlockAction, InfoBlockContent, InfoBlockHeader},
} as Meta

export const Base: Story<InfoBlockProps> = (args) => (
  <InfoBlock {...args}>
    <InfoBlockHeader status={InfoBlockStatus.WARNING}>Une erreur est survenue</InfoBlockHeader>
    <InfoBlockContent>
      <Text>La page à laquelle vous essayez accéder est momentanément indisponible</Text>
      <Text>Veuillez réessayer ultérieurement</Text>
    </InfoBlockContent>
    <InfoBlockAction>
      <Button variant={ButtonVariant.PRIMARY} onClick={() => alert('test')}>
        Button
      </Button>
    </InfoBlockAction>
  </InfoBlock>
)

Base.args = {
  boxed: true
}
