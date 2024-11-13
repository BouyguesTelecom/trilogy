import { AutoLayout, TypographyAlign } from '@trilogy-ds/react'
import { Icon, IconName, ScrollView, Section, Title, View } from '@trilogy-ds/react/components'
import * as React from 'react'
import { PropsWithChildren } from 'react'

interface IProps {
  title: string
  goBack?: () => void
  scrollable?: boolean
}

export const Wrapper = ({ title, children, goBack, scrollable = true }: PropsWithChildren<IProps>): JSX.Element => {
  return (
    <View markup='main' className='main-content'>
      <AutoLayout>
        {scrollable && (
          <ScrollView>
            <Section>
              {goBack && <Icon name={IconName.ARROW_LEFT} onClick={goBack} />}
              <Title typo={[TypographyAlign.TEXT_CENTERED]}>{title}</Title>
            </Section>
            {children}
          </ScrollView>
        )}
        {!scrollable && (
          <>
            <Section>
              {goBack && <Icon name={IconName.ARROW_LEFT} onClick={goBack} />}
              <Title typo={[TypographyAlign.TEXT_CENTERED]}>{title}</Title>
            </Section>
            {children}
          </>
        )}
      </AutoLayout>
    </View>
  )
}
