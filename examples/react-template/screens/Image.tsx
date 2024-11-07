import * as React from 'react'
import { Image, RadiusValues, RowItem, Rows, Section } from '@trilogy-ds/react/components'
import { Alignable, Divider, Title, TitleLevels } from '@trilogy-ds/react'

export const ImageScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Image simple</Title>
      <Rows>
        <RowItem>
          <Image align={Alignable.ALIGNED_CENTER} width={150} height={150} src='https://picsum.photos/id/1/1500/600' />
        </RowItem>
        <RowItem>
          <Image radius={RadiusValues.SMALL} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </RowItem>
        <RowItem>
          <Image radius={RadiusValues.MEDIUM} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </RowItem>
        <RowItem>
          <Image radius={RadiusValues.LARGE} width={1000} height={250} src='https://picsum.photos/id/1/1500/600' />
        </RowItem>
      </Rows>
      <Divider />
      <Title level={TitleLevels.THREE}>Image circled</Title>
      <Image circled width={150} height={150} src='https://picsum.photos/id/1/1500/600' />
    </Section>
  )
}
