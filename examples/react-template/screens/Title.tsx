import { Divider, Section, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export const TitleScreen = (): JSX.Element => {
  const refTitle = React.useRef(null)

  React.useEffect(() => {
    console.log(refTitle)
  }, [refTitle])

  return (
    <Section>
      <Title ref={refTitle} level={TitleLevels.ONE}>
        Title level 1
      </Title>
      <Title level={TitleLevels.TWO}>Title level 2</Title>
      <Title level={TitleLevels.THREE}>Title level 3</Title>
      <Title level={TitleLevels.FOUR}>Title level 4</Title>
      <Title level={TitleLevels.FIVE}>Title level 5</Title>
      <Title level={TitleLevels.SIX}>Title level 6</Title>
      <Title subtitle>Subtitle</Title>
      <Title overline>Overline</Title>
      <Divider />
    </Section>
  )
}
