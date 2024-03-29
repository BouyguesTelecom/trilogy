import React from 'react'
import {Container, Icon, IconName, IconSize, Radio, RowItem, Rows, Text, Title, TitleLevels} from '@trilogy-ds/react/components'
import {RadioList} from '@trilogy-ds/react/components/radio/list'

export const RadioScreen = (): JSX.Element => {
  return (
    <Container>
      <RadioList isMobile>
        <Radio horizontalTile tile label='abc narrow' narrow marginless />
        <Radio horizontalTile tile label='abc narrow' narrow marginless />
        <Radio horizontalTile tile label='abc narrow' narrow marginless />
        <Radio horizontalTile tile label='abc narrow' narrow />
      </RadioList>
      <Radio
        label='Radio 1'
        name='radio1'
        value='default value 1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked
      />

      <Radio
        label='Radio 2'
        name='radio1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        value='default value 2'
      />
      <Radio
        disabled
        label='Radio 2'
        name='radio1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        value='default value 2'
      />
      <Radio
        iconTile={IconName.PICTO_PAYMENT_PAYPAL}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        iconTile={IconName.EYE_SLASH}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        iconTile={IconName.INFOS_CIRCLE}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        disabled
        iconTile={IconName.INFOS_CIRCLE}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        disabled
        iconTile={IconName.BELL}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        horizontalTile
        disabled
        iconTile={IconName.INFOS_CIRCLE}
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        iconTile={IconName.ARROW_RIGHT}
        horizontalTile
        tile
        label='radio tile'
        name='radio'
        value='default value 1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        horizontalTile
        tile
        label='radio tile'
        name='radio'
        value='default value 1'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      />
      <Radio
        horizontalTile
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='toto est content detre dans une tuile horizontal'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      >
        <Icon name={IconName.PICTO_PAYMENT_PAYPAL} size={IconSize.LARGE} />
        <Icon name={IconName.PICTO_PAYMENT_VISA} size={IconSize.LARGE} />
        <Icon name={IconName.PICTO_FACILITI} size={IconSize.LARGE} />
      </Radio>
      <Radio horizontalTile tile label='abc narrow' narrow />
      <Radio tile label='abc small' narrow />
      <Radio
        horizontalTile
        tile
        label='Radio tile'
        name='radio'
        value='default value 1'
        description='toto est content detre dans une tuile horizontal'
        // eslint-disable-next-line no-console
        onChange={(e) => console.log(e.radioValue, e.radioChecked)}
        checked={false}
      >
        <Icon name={IconName.PICTO_FACILITI} size={IconSize.LARGE} />
        <Icon name={IconName.PICTO_PAYMENT_VISA} size={IconSize.LARGE} />
        <Icon name={IconName.EXCLAMATION_CIRCLE} size={IconSize.LARGE} />
        <Rows>
          <RowItem>
            <Title level={TitleLevels.THREE} markup={'div'} className={'is-marginless'}>
              Tahfjkhdkshfkhs jhqsfjsqhfjklhsq fhjskqhf ljqh
            </Title>
          </RowItem>
          <RowItem>
            <Text level={TitleLevels.THREE} markup={'div'} className={'is-marginless'}>
              Tahfjkhdkshfkhs jhqsfjsqhfjklhsq fhjskqhf ljqhflhlkjhsfljkh qsjklfh shfkljhqsfh jkhfkjl qjlhkfkjlhfjklqhsf
              hkjhf kfjhdhkdf jkhfj qshfkjhqs mere
            </Text>
          </RowItem>
        </Rows>
      </Radio>
    </Container>
  )
}
