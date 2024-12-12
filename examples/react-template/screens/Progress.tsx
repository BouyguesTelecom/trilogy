import * as React from 'react'
import {
  Divider,
  Progress,
  ProgressRadial,
  Section,
  StatusState,
  Text,
  TextLevels,
  Title,
  TitleLevels,
  TypographyBold,
} from '@trilogy-ds/react'

export const ProgressScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Progress Bar</Title>

        <ProgressRadial value={30} secondValue={30}>
          <Title level={TitleLevels.THREE} marginless>
            60
          </Title>
          <Text level={TextLevels.ONE} marginless>
            / 100 Go
          </Text>
        </ProgressRadial>

        <Divider />

        <Progress value={30} />

        <Progress value={30} status='INFO' />

        <Progress value={30} status='WARNING' />

        <Progress value={30} status='ERROR' />

        <Progress value={30} status='SUCCESS' />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Progression avec unique légende</Title>
        <Divider />

        <Progress legendCenter={'Unique legend'} value={30} status={StatusState.INFO} />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Progression avec légendes aux extremités</Title>
        <Divider />

        <Progress value={15} status={StatusState.INFO} legendStart='0Go' legendEnd="5Go" />
      </Section>
      <Section>
        <Title level={TitleLevels.THREE}>Barre de progression circulaire children custo</Title>

        <Divider />

        <ProgressRadial value={30} secondValue={60}>
          <Title level={TitleLevels.THREE} marginless>
            60
          </Title>
          <Text level={TextLevels.ONE} marginless>
            / 300 Go
          </Text>
        </ProgressRadial>

        <Title level={TitleLevels.THREE}>Barre de progression circulaire avec label et description</Title>

        <Divider />

        <ProgressRadial value={30} secondValue={60}>
          <Title level={TitleLevels.THREE} marginless>
            60
          </Title>
          <Text level={TextLevels.ONE} marginless>
            / 100 Go
          </Text>
        </ProgressRadial>

        <ProgressRadial value={30} secondValue={30} small>
          <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]} marginless>
            60
          </Text>
          <Text level={TextLevels.FOUR} marginless>
            / 100 Go
          </Text>
        </ProgressRadial>

        <Title level={TitleLevels.THREE}>Vide : </Title>

        <ProgressRadial value={0} secondValue={0} description='--' />
        <ProgressRadial value={0} secondValue={0} description='--' small />
      </Section>
    </>
  )
}
