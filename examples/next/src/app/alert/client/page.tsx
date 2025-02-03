'use client'
import {
  Alert,
  AutoLayout,
  Button,
  Container,
  Divider,
  IconName,
  Section,
  Spacer,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/lib/components'
import { ToasterAlertProvider } from '@trilogy-ds/react/lib/components/alert'
import { ToasterAlertPosition } from '@trilogy-ds/react/lib/components/alert/AlertProps'
import ToasterContext from '@trilogy-ds/react/lib/components/alert/context/ToasterContext'
import { StatusState } from '@trilogy-ds/react/lib/objects'
import React, { useContext, useState } from 'react'

export default function AlertScreen() {
  const ToasterAlertView: React.FC = () => {
    const [offset] = useState(50)
    const [duration] = useState(1000)
    const [testId] = useState('toasterId')
    const [title] = useState('Why do we use it?')
    const [description] = useState(
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    )

    const { show } = useContext(ToasterContext)

    const onClickToaster = () => {
      show({
        testId,
        position: ToasterAlertPosition.TOP,
        duration,
        offset,
        title,
        description,
        iconName: IconName.ALERT,
        status: StatusState.WARNING,
        onClick: () => console.log('onClick'),
        closable: () => alert('closable'),
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
    <Section>
      <Alert
        banner
        status={StatusState.INFO}
        title='Banner Alert'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
      />

      <ToasterAlertProvider>
        <ToasterAlertView />
        <Container>
          <View>
            {Object.values(StatusState).map((status, index) => {
              return (
                <AutoLayout key={index}>
                  <Title level={TitleLevels.TWO}>StatusState : {status}</Title>
                  <Spacer size={10} />
                  <Alert
                    status={status}
                    title={status}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
                  />
                  <Divider />
                </AutoLayout>
              )
            })}
          </View>
        </Container>
      </ToasterAlertProvider>
    </Section>
  )
}
