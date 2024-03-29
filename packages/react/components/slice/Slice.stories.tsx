import React from 'react'

import { Meta, Story } from '@storybook/react'
import { Slice, SliceBody, SliceContent, SliceCta, SliceIcon, SliceImage, SliceList } from './index'
import { SliceProps } from './SliceProps'
import { Icon, IconName, IconSize } from '../icon'
import { Text, TextLevels } from '../text'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { Title, TitleLevels } from '../title'

export default {
  title: 'Components/Slice',
  component: Slice,
  subcomponents: { SliceBody, SliceContent, SliceCta, SliceIcon, SliceImage, SliceList },
} as Meta

export const Base: Story<SliceProps> = (args) => (
  <Slice {...args}>
    <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.TV_BTV} />
    <SliceContent>
      <Text level={TextLevels.ONE}>Slice avec CTA simple (ici, un simple chevron)</Text>
      <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
    </SliceContent>
    <SliceCta>
      <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} onClick={() => alert('Click on cta')} />
    </SliceCta>
  </Slice>
)
export const AvecCTA: Story<SliceProps> = (args) => (
  <Slice {...args}>
    <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.TV_BTV} />
    <SliceContent>
      <Text level={TextLevels.ONE}>Slice avec CTA simple (ici, un simple chevron)</Text>
      <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
    </SliceContent>
    <SliceCta>
      <Button variant={'PRIMARY'} onClick={() => alert('click on cta')}>
        Button CTA
      </Button>
    </SliceCta>
  </Slice>
)

export const SlicesMultiples: Story<SliceProps> = (args) => (
  <SliceList selectable>
    <Slice {...args}>
      <Checkbox removeControl removeField name='checkone' />
      <SliceBody>
        <SliceContent>
          <Text level={TextLevels.ONE}>Slice avec CTA simple (ici, un simple chevron)</Text>
          <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
        </SliceContent>
        <SliceCta>
          <Button variant={'PRIMARY'} onClick={() => alert('click on cta')}>
            Button CTA
          </Button>
        </SliceCta>
      </SliceBody>
    </Slice>
    <Slice selectable>
      <Checkbox removeControl removeField name='checktwo' />
      <SliceBody>
        <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.TV_BTV} />
        <SliceContent>
          <Text level={TextLevels.ONE}>Slice avec CTA simple (ici, un simple chevron)</Text>
          <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
        </SliceContent>
        <SliceCta>
          <Button variant={'PRIMARY'} onClick={() => alert('click on cta')}>
            Button CTA
          </Button>
        </SliceCta>
      </SliceBody>
    </Slice>
    <Slice selectable>
      <Checkbox removeControl removeField name='checktwo' />
      <SliceBody>
        <SliceImage src='https://design.bouyguestelecom.fr/phone.1da9ed96.png' alt='phone' />
        <SliceContent>
          <Text level={TextLevels.ONE}>Slice avec CTA simple (ici, un simple chevron)</Text>
          <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
        </SliceContent>
        <SliceCta>
          <Button variant={'PRIMARY'} onClick={() => alert('click on cta')}>
            Button CTA
          </Button>
        </SliceCta>
      </SliceBody>
    </Slice>
    <Slice>
      <SliceBody>
        <SliceImage rounded src='https://design.bouyguestelecom.fr/profil.14ef6e58.jpg' alt='phone' />
        <SliceContent>
          <Title level={TitleLevels.THREE}>Slice avec CTA simple (ici, un simple chevron)</Title>
          <Text>Un texte supplémentaire pour décrire le contenu de laction</Text>
        </SliceContent>
        <SliceCta>
          <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} onClick={() => alert('Click on cta')} />
        </SliceCta>
      </SliceBody>
    </Slice>
  </SliceList>
)
SlicesMultiples.args = {
  selectable: true,
}
