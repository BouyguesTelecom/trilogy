import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Slice,
  SliceIcon,
  SliceContent,
  TextLevels,
  SliceCta,
  SliceList,
  Checkbox,
  SliceBody,
  SliceImage,
  Text,
  Button,
  IconSize,
  IconName,
  Icon,
} from '@trilogy-ds/react/components'

export const SliceScreen = (): JSX.Element => {
  return (
    <Section>
      <Slice>
        <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.ARROW_RIGHT} />
        <SliceContent>
          <Text level={TextLevels.ONE}>Slice with simple CTA (here, a simple chevron)</Text>
          <Text>Additional text to describe the content of the action</Text>
        </SliceContent>
        <SliceCta>
          <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} onClick={() => alert('Click on cta')} />
        </SliceCta>
      </Slice>

      <Slice>
        <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.CHECK} />
        <SliceContent>
          <Text level={TextLevels.ONE}>Slice with simple CTA (here, a simple chevron)</Text>
          <Text>Additional text to describe the content of the action</Text>
        </SliceContent>
        <SliceCta>
          <Button variant={'PRIMARY'} onClick={() => alert('click on cta')}>
            Button CTA
          </Button>
        </SliceCta>
      </Slice>

      <SliceList selectable>
        <Slice selectable>
          <Checkbox removeControl removeField name='checkone' />
          <SliceBody>
            <SliceContent>
              <Text level={TextLevels.ONE}>Slice with simple CTA (here, a simple chevron)</Text>
              <Text>Additional text to describe the content of the action</Text>
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
            <SliceIcon iconSize={IconSize.LARGE} iconName={IconName.TRASH} />
            <SliceContent>
              <Text level={TextLevels.ONE}>Slice with simple CTA (here, a simple chevron)</Text>
              <Text>Additional text to describe the content of the action</Text>
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
            <SliceImage src='https://images.pexels.com/photos/18254878/pexels-photo-18254878/free-photo-of-eau-desert-rochers-source-chaude.jpeg' alt='phone' />
            <SliceContent>
              <Text level={TextLevels.ONE}>Slice with simple CTA (here, a simple chevron)</Text>
              <Text>Additional text to describe the content of the action</Text>
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
            <SliceImage rounded src='https://images.pexels.com/photos/18254878/pexels-photo-18254878/free-photo-of-eau-desert-rochers-source-chaude.jpeg' alt='phone' />
            <SliceContent>
              <Title level={TitleLevels.THREE}>Slice with simple CTA (here, a simple chevron)</Title>
              <Text>Additional text to describe the content of the action</Text>
            </SliceContent>
            <SliceCta>
              <Icon name={IconName.ARROW_RIGHT} size={IconSize.SMALL} onClick={() => alert('Click on cta')} />
            </SliceCta>
          </SliceBody>
        </Slice>
      </SliceList>
    </Section>
  )
}
