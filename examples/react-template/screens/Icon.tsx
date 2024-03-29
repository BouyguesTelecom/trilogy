import React from 'react'
import {
  Icon,
  IconSize,
  IconColor,
  IconPosition,
  IconStatusPosition,
  IconStatus,
  Section,
  Title,
  TitleLevels,
  Divider,
  Text,
  Container,
  Box,
  View,
  Link,
} from '@trilogy-ds/react/components'
import { Alignable } from '@trilogy-ds/react/objects'
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

      <Icon
        align={Alignable.ALIGNED_START}
        size={IconSize.MEDIUM}
        name={IconName.TIMES}
        content={'Icon with text props content'}
        position={IconPosition.UP}
      />

      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.ARROW_UP} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.ARROW_DOWN} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.ARROW_LEFT} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.ARROW_RIGHT} />

      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.TIMES} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.HUGE} name={IconName.TIMES} stretched={true} />
      <Icon align={Alignable.ALIGNED_START} name={IconName.TIMES} />
      <Icon align={Alignable.ALIGNED_START} name={IconName.TIMES} stretched={true} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.SMALL} name={IconName.TIMES} stretched={true} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.MEDIUM} name={IconName.TIMES} stretched={true} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.LARGE} name={IconName.TIMES} stretched={true} />
      <Icon align={Alignable.ALIGNED_START} size={IconSize.SMALLER} name={IconName.TIMES} stretched={true} />

      <Icon align={Alignable.ALIGNED_CENTER} size={IconSize.MEDIUM} name={IconName.ARROW_RIGHT} />

      <Icon align={Alignable.ALIGNED_END} size={IconSize.LARGE} name={IconName.ARROW_RIGHT} />

      <Icon size={IconSize.LARGE} name={IconName.TIMES} />

      <Box background='ERROR'>
        <Icon color={IconColor.WHITE} size={IconSize.LARGE} name={IconName.TIMES} />
      </Box>

      <Icon color={IconColor.ERROR} circled size={IconSize.LARGE} name={IconName.TIMES} />

      <Icon circled size={IconSize.LARGE} name={IconName.TIMES} />

      <Title level={TitleLevels.THREE}>Icon with text, position and vertical alignment</Title>
      <Divider />

      <Container>
        <View>
          <Text>Icon UP</Text>
          <Icon content='Input + text' size={IconSize.LARGE} position={IconPosition.UP} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon DOWN</Text>
          <Icon content='Input + text' size={IconSize.LARGE} position={IconPosition.DOWN} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon LEFT</Text>
          <Icon content='Input + text' size={IconSize.LARGE} position={IconPosition.LEFT} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Icon RIGHT</Text>
          <Icon content='Input + text' size={IconSize.LARGE} position={IconPosition.RIGHT} name={IconName.TIMES} />
        </View>
        <Divider />
        <View>
          <Text>Center align</Text>
          <Icon
            content='Donec dui tellus, fermentum ut purus ac, commodo vestibulum enim. Fusce ut tortor in leo dictum maximus. Sed aliquam ante consequat turpis faucibus, id ultricies est vulputate. Nullam semper justo nulla, sed pulvinar urna tincidunt sagittis. Phasellus vitae erat massa. Fusce quis ultrices magna, eget varius nibh. Proin purus dui, lobortis vel diam sit amet, interdum vestibulum nunc.'
            size={IconSize.MEDIUM}
            verticalAlign={Alignable.ALIGNED_CENTER}
            name={IconName.TIMES}
          />
        </View>
        <Divider />
        <View>
          <Text>Top align</Text>
          <Icon
            content='Donec dui tellus, fermentum ut purus ac, commodo vestibulum enim. Fusce ut tortor in leo dictum maximus. Sed aliquam ante consequat turpis faucibus, id ultricies est vulputate. Nullam semper justo nulla, sed pulvinar urna tincidunt sagittis. Phasellus vitae erat massa. Fusce quis ultrices magna, eget varius nibh. Proin purus dui, lobortis vel diam sit amet, interdum vestibulum nunc.'
            size={IconSize.MEDIUM}
            verticalAlign={Alignable.ALIGNED_START}
            name={IconName.TIMES}
          />
        </View>
        <Divider />
        <View>
          <Text>Bottom Align</Text>
          <Icon
            content='Donec dui tellus, fermentum ut purus ac, commodo vestibulum enim. Fusce ut tortor in leo dictum maximus. Sed aliquam ante consequat turpis faucibus, id ultricies est vulputate. Nullam semper justo nulla, sed pulvinar urna tincidunt sagittis. Phasellus vitae erat massa. Fusce quis ultrices magna, eget varius nibh. Proin purus dui, lobortis vel diam sit amet, interdum vestibulum nunc.'
            size={IconSize.MEDIUM}
            verticalAlign={Alignable.ALIGNED_END}
            name={IconName.TIMES}
          />
        </View>

        <View>
          <Icon
            content={<Link href={'https://google.fr'}>My super link with href</Link>}
            size={IconSize.LARGE}
            position={IconPosition.LEFT}
            name={IconName.TIMES}
          />
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
