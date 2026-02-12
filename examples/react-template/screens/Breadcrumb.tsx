import { Spacer, SpacerSize } from '@trilogy-ds/react'
import {
  Box,
  BoxContent,
  Breadcrumb,
  Button,
  Card,
  CardContent,
  Container,
  Row,
  Rows,
  Section,
  Text,
} from '@trilogy-ds/react/lib/components'
import { BreadcrumbItem } from '@trilogy-ds/react/lib/components/breadcrumb/item'
import { TypographyBold } from '@trilogy-ds/react/lib/objects'
import { useState } from 'react'

export const BreadcrumScreen = (): JSX.Element => {
  const [active, setActive] = useState(2)

  return (
    <Section>
      {/* N EXISTE PAS EN MOBILE */}

      <Button variant='PRIMARY' onClick={() => setActive((prev) => (prev + 1 > 3 ? 0 : prev + 1))}>
        Next to BreadcrumbItem
      </Button>

      <Spacer size={SpacerSize.FOUR} />

      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>Simple Breadcrumb</Text>
      <Breadcrumb>
        <BreadcrumbItem active={active == 0} href='https://Home.fr'>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem active={active == 1} to='#anchor'>
          Catalog
        </BreadcrumbItem>
        <BreadcrumbItem active={active == 2}>Accessories</BreadcrumbItem>
        <BreadcrumbItem active={active == 3}>Current page</BreadcrumbItem>
      </Breadcrumb>

      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>Breadcrumb in box</Text>
      <Box>
        <BoxContent>
          <Breadcrumb>
            <BreadcrumbItem active={active == 0} href='https://Home.fr'>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem active={active == 1} to='#anchor'>
              Catalog
            </BreadcrumbItem>
            <BreadcrumbItem active={active == 2}>Accessories</BreadcrumbItem>
            <BreadcrumbItem active={active == 3}>Current page</BreadcrumbItem>
          </Breadcrumb>
        </BoxContent>
      </Box>

      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>Breadcrumb in card</Text>
      <Card>
        <CardContent>
          <Breadcrumb>
            <BreadcrumbItem active={active == 0} href='https://Home.fr'>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem active={active == 1} to='#anchor'>
              Catalog
            </BreadcrumbItem>
            <BreadcrumbItem active={active == 2}>Accessories</BreadcrumbItem>
            <BreadcrumbItem active={active == 3}>Current page</BreadcrumbItem>
          </Breadcrumb>
        </CardContent>
      </Card>

      <Text typo={[TypographyBold.TEXT_WEIGHT_SEMIBOLD]}>Breadcrumb in rows</Text>
      <Container>
        <Rows>
          <Row></Row>
          <Row>
            <Container>
              <Breadcrumb>
                <BreadcrumbItem href='https://Home.fr'>Home</BreadcrumbItem>
                <BreadcrumbItem to='#anchor'>Catalog</BreadcrumbItem>
                <BreadcrumbItem>Accessories</BreadcrumbItem>
                <BreadcrumbItem active>Current page</BreadcrumbItem>
              </Breadcrumb>
            </Container>
          </Row>
        </Rows>
      </Container>
    </Section>
  )
}
