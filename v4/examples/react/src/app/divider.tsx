import {
  Row,
  Rows,
  Spacer,
  SpacerSize,
  Box,
  BoxContent,
  Divider,
  GapSize,
  IconName,
  Section,
  Text,
} from '@trilogy-ds/react'

export default function DividerScreen(): JSX.Element {
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
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>
      </Box>
      <Box>
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>

        <Divider content={'New Message'} />
        <BoxContent>
          <Text>Lorem ipsum dolor sit amet</Text>
        </BoxContent>
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
