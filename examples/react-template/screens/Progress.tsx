import React from 'react'
import {
  StatusState,
  TypographyBold,
  Section,
  Title,
  TitleLevels,
  Divider,
  Progress,
  ProgressItem,
  ProgressRadial,
  Text,
  TextLevels,
  TrilogyColor
} from '@trilogy-ds/react'

export const ProgressScreen = (): JSX.Element => {

  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Progress Bar</Title>

        <ProgressRadial percent={30} secondPercent={30} >
          <Title level={TitleLevels.THREE} marginless>60</Title>
          <Text level={TextLevels.ONE} marginless>/ 100 Go</Text>
        </ProgressRadial>

        <Divider />

        <Progress percent={30} />

        <Progress percent={30} status='INFO' />

        <Progress percent={30} status='WARNING' />

        <Progress percent={30} status='ERROR' />

        <Progress percent={30} status='SUCCESS' />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Barre de progression empilée</Title>

        <Divider />

        <Progress stacked>
          <ProgressItem percent={15} status={StatusState.SUCCESS} />
          <ProgressItem percent={15} status={StatusState.INFO} />
          <ProgressItem percent={15} status={StatusState.WARNING} />
          <ProgressItem percent={15} status={StatusState.ERROR} />
        </Progress>
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Progression avec unique légende</Title>
        <Divider />

        <Progress percent={30} status={StatusState.INFO} uniqueLegend='My unique legend' />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Progression avec légendes aux extremités</Title>
        <Divider />

        <Progress percent={15} status={StatusState.INFO} firstExtremLegend='0 Go' secondExtremLegend='5 Go' />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Barre de progression circulaire children custo</Title>

        <Divider />

        <ProgressRadial percent={30} secondPercent={30}>
          <Title level={TitleLevels.THREE} marginless>60</Title>
          <Text level={TextLevels.ONE} marginless>/ 300 Go</Text>
        </ProgressRadial>

        <Title level={TitleLevels.THREE}>Barre de progression circulaire avec label et description</Title>

        <Divider />

        <ProgressRadial percent={30} secondPercent={30} >
          <Title level={TitleLevels.THREE} marginless>60</Title>
          <Text level={TextLevels.ONE} marginless>/ 100 Go</Text>
        </ProgressRadial>

        <ProgressRadial percent={30} secondPercent={30} small>
          <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]} marginless>60</Text>
          <Text level={TextLevels.FOUR} marginless>/ 100 Go</Text>
        </ProgressRadial>

        <Title level={TitleLevels.THREE}>Vide : </Title>

        <ProgressRadial percent={0} secondPercent={0} description='--' />
        <ProgressRadial percent={0} secondPercent={0} description='--' small />
      </Section>
    </>
  )
}
