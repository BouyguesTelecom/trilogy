import { Divider, Pagination, Section, Title, TitleLevels } from '@trilogy-ds/react/components'
import * as React from 'react'

export const PaginationScreen = (): JSX.Element => {
  return (
    <>
      <Section>
        <Title level={TitleLevels.THREE}>Pagination</Title>
        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} length={5} href={(pageNumber) => `/page/${pageNumber}`} />

        <Divider />

        <Pagination onClick={(e) => console.log('event', e)} length={70} />
        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} length={7} defaultPage={2} />

        <Divider />
        <Pagination onClick={(e) => console.log('event', e)} length={3} defaultPage={2} />
      </Section>
    </>
  )
}
