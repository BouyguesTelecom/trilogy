import * as React from "react";
import {
  Divider,
  Price,
  PriceLevel,
  Section,
  Title,
  TitleLevels,
  Spacer,
  SpacerSize,
  View
} from "@trilogy-ds/react/components";
import { Alignable, TrilogyColor, colors } from "@trilogy-ds/react/objects";

export const PriceScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Price with stricked amount</Title>

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={1}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={2}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={3}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={4}
        amount={24.99}
        showCents
        period={'mois'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={5}
        amount={24.99}
        showCents
        period={'mois'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={6}
        amount={24.99}
        showCents
        period={'mois'}
      />

      <Price
        overline="A partir de"
        strikedAmount={10.99}
        level={7}
        amount={24.99}
        showCents
        period={'mois'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Title level={TitleLevels.THREE}>Price tag</Title>

      <Price
        overline="A partir de"
        level={1}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={2}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={3}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={4}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={5}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={6}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.SMALL} />

      <Price
        overline="A partir de"
        level={7}
        amount={24.99}
        showCents
        period={'mois'}
        tagAmount={10}
        tagSymbol={'€'}
      />

      <Spacer size={SpacerSize.MEDIUM} />

      <Title level={TitleLevels.THREE}>Simple</Title>

      <Price level={2} amount={18.99} showCents />

      <Price level={2} amount={18.99} showCents striked={true} />

      <Divider />
      <Title level={TitleLevels.THREE}>Inlined</Title>

      <Price
        level={7}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_START}
        suptitle={"From "}
        inline
      />

      <Divider />
      <Title level={TitleLevels.THREE}>Alignement</Title>
      <Price
        level={1}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_START}
      />

      <Price
        level={1}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_CENTER}
      />

      <Price
        level={1}
        amount={1000}
        mention="(1)"
        period="months"
        showCents
        align={Alignable.ALIGNED_END}
      />

      <Divider />

      <Title level={TitleLevels.THREE}>Size</Title>

      <Price
        level={PriceLevel.ONE}
        amount={100}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.TWO}
        amount={24.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.THREE}
        amount={24.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.FOUR}
        amount={18.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.FIVE}
        amount={18.99}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.SIX}
        amount={18.1}
        mention="(1)"
        period="months"
        showCents
      />

      <Price
        level={PriceLevel.SEVEN}
        amount={18.1}
        mention="(1)"
        period="months"
        showCents
      />
      <Divider />

      <Title level={TitleLevels.THREE}>Inverted price</Title>

      <Section backgroundColor={{color: TrilogyColor.NEUTRAL, fade: true}}>
        <Price
          inverted
          level={PriceLevel.ONE}
          amount={18.99}
          mention="(1)"
          period="months"
          showCents
        />

        <Price
          striked
          inverted
          level={PriceLevel.ONE}
          amount={18.99}
          mention="(1)"
          period="months"
          showCents
        />
      </Section>

      <Divider />

      <Title level={TitleLevels.THREE}>With or Without cents</Title>

      <Price level={PriceLevel.FOUR} amount={18} period="months" />

      <Price level={PriceLevel.FOUR} amount={18} period="months" showCents />
    </Section>
  );
};
