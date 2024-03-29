import React, { useContext, useState } from 'react'
import { Button, Container, IconName, Section, ToasterContext, ToasterProvider } from '@trilogy-ds/react/components'
import { ToasterPosition } from '@trilogy-ds/react/components/toaster/ToasterProps'
import { AlertState } from '@trilogy-ds/react/objects'

export const ToasterScreen = (): JSX.Element => {
  const ToasterViewComp: React.FC = () => {
    const [offset] = useState(50)
    const [duration] = useState(10000000)
    const [testId] = useState('toasterId')
    const [title] = useState('Why do we use it?')
    const [description] = useState(
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    )

    const { show } = useContext(ToasterContext)

    const onClickToaster = () => {
      show({
        testId,
        position: ToasterPosition.TOP,
        duration,
        offset,
        title,
        description,
        iconName: IconName.INFOS_CIRCLE,
        alert: AlertState.WARNING,
        onClick: () => console.log('onClick'),
        closable: () => console.log('closable'),
        onHide: () => console.log('onHide'),
      })
    }
    return (
      <Section>
        <Container>
          <Button variant={'PRIMARY'} onClick={onClickToaster}>
            Open toast
          </Button>
        </Container>
      </Section>
    )
  }

  return (
    <ToasterProvider>
      <ToasterViewComp />
    </ToasterProvider>
  )
}
