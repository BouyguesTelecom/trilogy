import { Alert } from '@trilogy-ds/react/lib/components/alert'
import { Container } from '@trilogy-ds/react/lib/components/container'
import { Divider } from '@trilogy-ds/react/lib/components/divider'
import { Section } from '@trilogy-ds/react/lib/components/section'
import { Spacer } from '@trilogy-ds/react/lib/components/spacer'
import { StatusState } from '@trilogy-ds/react/lib/objects/facets/Status'
import { Fragment } from 'react'

export default function AlertScreen() {
  return (
    <Section>
      <Alert
        banner
        status={StatusState.INFO}
        title='Banner Alert'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
      />

      <Container>
        <>
          {Object.values(StatusState).map((status, index) => {
            return (
              <Fragment key={index}>
                <p>StatusState : {status}</p>
                <Spacer size='THREE' />
                <Alert
                  status={status}
                  title={status}
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
                />
                <Divider />
              </Fragment>
            )
          })}
        </>
      </Container>
    </Section>
  )
}
