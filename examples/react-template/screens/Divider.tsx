import {
  Box,
  BoxContent,
  Divider,
  GapSize,
  IconName,
  Row,
  Rows,
  Section,
  Spacer,
  SpacerSize,
  Text,
} from '@trilogy-ds/react'

export const DividerScreen = (): JSX.Element => {
  return (
    <Section>
      <Rows gap={GapSize.EIGHT}>
        <Row>
          <Divider />
        </Row>
        <Row>
          <Divider />
        </Row>
      </Rows>

      <Spacer size={SpacerSize.EIGHT} />

      <Box>
        <Divider iconName={IconName.EYE_SLASH} />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Divider content={'New Message'} />
        <Text>Lorem ipsum dolor sit amet</Text>
      </Box>
      <Box>
        <BoxContent>
          <Divider unboxed />
        </BoxContent>
      </Box>
      <Divider />
    </Section>
  )
}
