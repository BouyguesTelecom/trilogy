import * as React from 'react'
import {
  Container,
  Divider,
  Icon,
  IconColor,
  IconPosition,
  IconSize,
  IconStatus,
  IconStatusPosition,
  Section,
  Text,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/components'
import { IconName } from '@trilogy-ds/assets/lib/iconNameEnum'

export const IconScreen = (): JSX.Element => {
  return (
    <Section>
      <Icon size={IconSize.HUGE} name={IconName.ARROW_UP} />

      <Icon name={IconName.ARROW_DOWN} color={IconColor.GREY} size={IconSize.SMALL} />

      <Icon size={IconSize.MEDIUM} name={IconName.ARROW_UP} />

      <Icon size={IconSize.MEDIUM} name={IconName.ARROW_RIGHT} />

      <Icon size={IconSize.MEDIUM} name={IconName.ARROW_LEFT} />

      <Icon size={IconSize.MEDIUM} name={IconName.ARROW_DOWN} />

      <Icon size={IconSize.MEDIUM} name={IconName.CHECK_CIRCLE} />

      <Icon size={IconSize.MEDIUM} name={IconName.CHECK} />

      <Text className={'has-text-primary'}>
        Icon with text children
        <Icon name={IconName.ALERT} />
      </Text>

      <Icon size={IconSize.MEDIUM} name={IconName.TIMES} />

      <Icon size={IconSize.HUGE} name={IconName.ARROW_UP} />
      <Icon size={IconSize.HUGE} name={IconName.ARROW_DOWN} />
      <Icon size={IconSize.HUGE} name={IconName.ARROW_LEFT} />
      <Icon size={IconSize.HUGE} name={IconName.ARROW_RIGHT} />

      <Icon size={IconSize.HUGE} name={IconName.TIMES} />
      <Icon size={IconSize.HUGE} name={IconName.TIMES} stretched={true} />
      <Icon name={IconName.TIMES} />
      <Icon name={IconName.TIMES} stretched={true} />
      <Icon size={IconSize.SMALL} name={IconName.TIMES} stretched={true} />
      <Icon size={IconSize.MEDIUM} name={IconName.TIMES} stretched={true} />
      <Icon size={IconSize.LARGE} name={IconName.TIMES} stretched={true} />
      <Icon size={IconSize.SMALLER} name={IconName.TIMES} stretched={true} />

      <Icon size={IconSize.MEDIUM} name={IconName.ARROW_RIGHT} />

      <Icon size={IconSize.LARGE} name={IconName.ARROW_RIGHT} />

      <Icon size={IconSize.LARGE} name={IconName.TIMES} />

      <Icon color={IconColor.ERROR} circled size={IconSize.LARGE} name={IconName.TIMES} />

      <Icon circled size={IconSize.LARGE} name={IconName.TIMES} />

      <Title level={TitleLevels.THREE}>Icon with text, position and vertical alignment</Title>
      <Divider />

      <Container>
        <View>
          <Text>Icon UP</Text>
          <Icon size={IconSize.LARGE} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon DOWN</Text>
          <Icon size={IconSize.LARGE} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon LEFT</Text>
          <Icon size={IconSize.LARGE} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon RIGHT</Text>
          <Icon size={IconSize.LARGE} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Center align</Text>
          <Icon size={IconSize.MEDIUM} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Top align</Text>
          <Icon size={IconSize.MEDIUM} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Bottom Align</Text>
          <Icon size={IconSize.MEDIUM} name={IconName.TIMES} />
        </View>

        <View>
          <Icon size={IconSize.LARGE} position={IconPosition.LEFT} name={IconName.TIMES} />
        </View>
      </Container>

      <Title level={TitleLevels.THREE}>Icon with status</Title>
      <Divider />

      <Icon
        statusPosition={IconStatusPosition.TOP}
        status={IconStatus.SUCCESS}
        size={IconSize.MEDIUM}
        name={IconName.TIMES}
      />

      <Icon
        statusPosition={IconStatusPosition.BOTTOM}
        status={IconStatus.SUCCESS}
        size={IconSize.MEDIUM}
        name={IconName.TIMES}
      />
    </Section>
  )
}
