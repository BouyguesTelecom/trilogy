import { TypographyAlign } from '@trilogy-ds/react'
import { Icon, IconName, ScrollView, Section, Title } from '@trilogy-ds/react/components'
import React, { PropsWithChildren } from 'react'

interface IProps {
  title: string
  goBack?: () => void
  scrollable?: boolean
}

export const Wrapper = ({ title, children, goBack, scrollable = true }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <Section>
      {scrollable && (
        <ScrollView>
          {goBack && <Icon name={IconName.ARROW_LEFT} onClick={goBack} />}
          <Title typo={[TypographyAlign.TEXT_CENTERED]}>{title}</Title>
          {children}
        </ScrollView>
      )}
      {!scrollable && (
        <>
          {goBack && <Icon name={IconName.ARROW_LEFT} onClick={goBack} />}
          <Title typo={[TypographyAlign.TEXT_CENTERED]}>{title}</Title>
          {children}
        </>
      )}
    </Section>
  )
}
