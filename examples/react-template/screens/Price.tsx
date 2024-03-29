import React from 'react'
import {
  Section,
  Divider,
  Title,
  TitleLevels,
  Price,
  PriceVariant,
  PriceLevel,
  Hero,
} from '@trilogy-ds/react/components'
import { Alignable, VariantState } from '@trilogy-ds/react/objects'

export const PriceScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Simple</Title>

      <Price
        variant={PriceVariant.PRIMARY}
        level={'2'}
        amount={18.99}
        showCents
      />

      <Divider />
      <Title level={TitleLevels.THREE}>Inlined</Title>

      <Price
        variant={PriceVariant.PRIMARY}
        level={'7'}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_START}
        suptitle={'From '}
        inline
      />

      <Divider />
      <Title level={TitleLevels.THREE}>Alignement</Title>
      <Price
        variant={PriceVariant.PRIMARY}
        level={'1'}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_START}
      />

      <Price
        variant={PriceVariant.PRIMARY}
        level={'1'}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_CENTER}
      />

      <Price
        variant={PriceVariant.PRIMARY}
        level={'1'}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_END}
      />

      <Divider />

      <Title level={TitleLevels.THREE}>Size</Title>

      <Price
        variant={PriceVariant.PRIMARY}
        level={PriceLevel.LEVEL1}
        amount={100}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.PRIMARY}
        level={PriceLevel.LEVEL2}
        amount={24.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.SECONDARY}
        level={PriceLevel.LEVEL3}
        amount={24.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.PRIMARY}
        level={PriceLevel.LEVEL4}
        amount={18.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.SECONDARY}
        level={PriceLevel.LEVEL5}
        amount={18.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.SECONDARY}
        level={PriceLevel.LEVEL6}
        amount={18.1}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        variant={PriceVariant.SECONDARY}
        level={PriceLevel.LEVEL7}
        amount={18.1}
        mention="(1)"
        period="months"
        showCents
      />
      <Divider />

      <Title level={TitleLevels.THREE}>Inverted price</Title>

      <Hero variant={VariantState.TERTIARY}>
        <Price inverted level={PriceLevel.LEVEL1} amount={18.99} mention="(1)" period="months" showCents />

        <Price striked inverted level={PriceLevel.LEVEL1} amount={18.99} mention="(1)" period="months" showCents />
      </Hero>

      <Divider />

      <Title level={TitleLevels.THREE}>With or Without cents</Title>

      <Price variant={PriceVariant.PRIMARY} level={PriceLevel.LEVEL4} amount={18} period="months" />

      <Price variant={PriceVariant.PRIMARY} level={PriceLevel.LEVEL4} amount={18} period="months" showCents />
    </Section>
  )
}
