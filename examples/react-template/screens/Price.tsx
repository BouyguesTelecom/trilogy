import { Alignable, Columns, Column, TrilogyColor } from '@trilogy-ds/react'
import {
  Divider,
  Price,
  PriceLevel,
  Section,
  Spacer,
  SpacerSize,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import * as React from 'react'

export const PriceScreen = (): JSX.Element => {
  return (
    <Section>
      <Spacer size={SpacerSize.TWO} />
      <Title level={TitleLevels.TWO} marginless>
        Prix classiques seuls
      </Title>
      <Spacer size={SpacerSize.FIVE} />
      <Columns multiline>
        <Column size={4}>
          <Price amount={10.99} level={1} align={Alignable.ALIGNED_CENTER} />
        </Column>
        <Column narrow>
          <Price amount={10.99} level={1} hideCents />
        </Column>
        <Column narrow>
          <Price overline='A partir de' amount={10.99} level={1} hideCents />
        </Column>
        <Column narrow>
          <Price overline='A partir de' amount={10.99} level={1} hideCents period={'mois'} />
        </Column>
        <Column narrow>
          <Price
            overline='A partir de'
            amount={10.99}
            level={1}
            hideCents
            period={'mois'}
            tagValue='-10%'
            tagLabel={'de réduction'}
          />
        </Column>
        <Column narrow>
          <Price
            overline='A partir de'
            amount={10.99}
            level={1}
            hideCents
            period={'mois'}
            tagValue='-5€'
            tagLabel={'/mois'}
          />
        </Column>
      </Columns>

      <Divider />

      <Spacer size={SpacerSize.TWO} />
      <Title level={TitleLevels.TWO} marginless>
        Prix barré seul
      </Title>
      <Spacer size={SpacerSize.FIVE} />
      <Price overline='A partir de' oldAmount={24.99} level={1} hideCents period={'mois'} />

      <Divider />

      <Price
        overline='A partir de'
        oldAmount={10.99}
        level={2}
        amount={24.99}
        period={'mois'}
        tagValue={'-10€'}
        tagLabel={'/mois'}
      />

      <Price
        overline='A partir de'
        oldAmount={10.99}
        level={2}
        amount={24.99}
        period={'mois'}
        tagValue={'5€'}
        tagLabel={'de remise immédiate'}
      />

      <Price
        overline='A partir de'
        oldAmount={10.99}
        level={3}
        amount={24.99}
        period={'mois'}
        tagValue={'-10€'}
        tagLabel={'/mois'}
      />

      <Price overline='A partir de' oldAmount={10.99} level={4} amount={24.99} period={'mois'} />

      <Price overline='A partir de' oldAmount={10.99} level={5} amount={24.99} period={'mois'} />

      <Price overline='A partir de' oldAmount={10.99} level={6} amount={24.99} period={'mois'} />

      <Price overline='A partir de' oldAmount={10.99} level={7} amount={24.99} period={'mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Title level={TitleLevels.THREE}>Price tag</Title>

      <Price overline='A partir de' level={1} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={2} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={3} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={4} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={5} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={6} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.TWO} />

      <Price overline='A partir de' level={7} amount={24.99} period={'mois'} tagValue={'-10€'} tagLabel={'/mois'} />

      <Spacer size={SpacerSize.THREE} />

      <Title level={TitleLevels.THREE}>Simple</Title>

      <Price level={2} amount={18.99} />

      <Price level={2} amount={18.99} />

      <Divider />
      <Title level={TitleLevels.THREE}>Inlined</Title>

      <Price level={7} amount={1000} mention='(1)' period='months' inline />

      <Divider />
      <Title level={TitleLevels.THREE}>Alignement</Title>
      <Price level={1} amount={1000} mention='(1)' period='months' />

      <Price level={1} amount={1000} mention='(1)' period='months' />

      <Price level={1} amount={1000} mention='(1)' period='months' />

      <Divider />

      <Title level={TitleLevels.THREE}>Size</Title>

      <Price level={PriceLevel.ONE} amount={100} mention='(1)' period='months' />

      <Price level={PriceLevel.TWO} amount={24.99} mention='(1)' period='months' />

      <Price level={PriceLevel.THREE} amount={24.99} mention='(1)' period='months' />

      <Price level={PriceLevel.FOUR} amount={18.99} mention='(1)' period='months' />

      <Price level={PriceLevel.FIVE} amount={18.99} mention='(1)' period='months' />

      <Price level={PriceLevel.SIX} amount={18.1} mention='(1)' period='months' />

      <Price level={PriceLevel.SEVEN} amount={18.1} mention='(1)' period='months' />
      <Divider />

      <Title level={TitleLevels.THREE}>Inverted price</Title>

      <Section backgroundColor={TrilogyColor.MAIN}>
        <Price inverted level={PriceLevel.ONE} amount={18.99} mention='(1)' period='months' />

        <Price inverted level={PriceLevel.ONE} amount={18.99} mention='(1)' period='months' />
      </Section>

      <Divider />

      <Title level={TitleLevels.THREE}>With or Without cents</Title>

      <Price level={PriceLevel.FOUR} amount={18} period='months' />

      <Price level={PriceLevel.FOUR} amount={18} period='months' />
    </Section>
  )
}
