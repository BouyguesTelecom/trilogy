import {
  Alignable,
  Button,
  ButtonVariant,
  Justifiable,
  Section,
  Text,
  Title,
  TitleLevels,
  View,
  ViewMarkup,
} from '@trilogy-ds/react'

export const ViewScreen = (): JSX.Element => {
  return (
    <Section>
      <View justify={'JUSTIFIED_END'} markup={ViewMarkup.LABEL}>
        <Text>Click here to check the checkbox.</Text>
      </View>
      <View markup={ViewMarkup.SPAN}></View>
      <View markup={ViewMarkup.DIV} flexable justify={Justifiable.SPACE_BETWEEN} align={Alignable.ALIGNED_CENTER}>
        <Button variant={ButtonVariant.SECONDARY}>CLick on me</Button>
        <Title level={TitleLevels.THREE}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias culpa dolorum error et ex exercitationem,
          explicabo fugiat fugit, id impedit iste libero modi, molestiae nisi nobis quis sapiente ut voluptas?
        </Title>
      </View>
    </Section>
  )
}
