import {
  Box,
  BoxContent,
  Button,
  ButtonVariant,
  Divider,
  Pagination,
  Section,
  Title,
  TitleLevels,
} from '@trilogy-ds/react'
import * as React from 'react'

export const PaginationScreen = (): JSX.Element => {
  const [page, setPage] = React.useState(1)
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Pagination</Title>
        <Divider />
        <Pagination length={5} href={(pageNumber) => `/page/${pageNumber}`} />

        <Divider />

        <Pagination onClick={(e) => console.log(e)} length={70} />
        <Divider />
        <Pagination length={7} defaultPage={2} />

        <Divider />
        <Box flat>
          <BoxContent>
            <Pagination onClick={(e) => setPage(e.currentPage)} length={10} defaultPage={page} />
            <Button variant={ButtonVariant.PRIMARY} onClick={() => setPage(4)}>
              Set page n°4
            </Button>
          </BoxContent>
        </Box>
      </Section>
    </>
  )
}
