import * as React from 'react'
import { Image, RadiusValues, Row, Rows, Section } from '@trilogy-ds/react/components'
import { Alignable, Divider, Title, TitleLevels } from '@trilogy-ds/react'
import { CacheControl } from '@trilogy-ds/react/components/image/ImageProps'

export const ImageScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Image simple</Title>
      <Rows>
        <Row>
          <Image cache={CacheControl.CACHE_ONLY} align={Alignable.ALIGNED_CENTER} width={150} height={150} src='https://picsum.photos/id/1/1500/600' />
        </Row>
        <Row>
          <Image radius={RadiusValues.SMALL} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </Row>
        <Row>
          <Image radius={RadiusValues.MEDIUM} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </Row>
        <Row>
          <Image radius={RadiusValues.LARGE} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </Row>
      </Rows>
      <Divider />
      <Title level={TitleLevels.THREE}>Image circled</Title>
      <Image circled width={150} height={150} src='https://picsum.photos/id/1/1500/600' />
    </Section>
  )
}
