import { ToasterAlertProvider } from '@trilogy-ds/react'
import {
  Alert,
  AutoLayout,
  Button,
  Container,
  Divider,
  IconName,
  Section,
  Spacer,
  SpacerSize,
  Text,
  Title,
  TitleLevels,
  View,
} from '@trilogy-ds/react/components'
import { ToasterAlertFloat, ToasterAlertPosition } from '@trilogy-ds/react/lib/components/alert/AlertProps'
import { StatusState } from '@trilogy-ds/react/objects'
import * as React from 'react'
import { useState } from 'react'

export const AlertScreen = (): JSX.Element => {
  const ToasterAlertView: React.FC = () => {
    const [offset] = useState(50)
    const [duration] = useState(4000)
    const [testId] = useState('toasterId')
    const [title] = useState('Why do we use it?')
    const [description] = useState(
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    )

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
        float: ToasterAlertFloat.RIGHT,
        onClick: () => console.log('onClick'),
        closable: () => alert('closable'),
        onHide: () => console.log('onHide'),
        markup: 'h2',
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
        markup='h3'
        status={StatusState.INFO}
        title='Banner Alert'
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
      />
      <Spacer size={SpacerSize.EIGHT} />
      <Alert
        status={StatusState.INFO}
        title='Banner Alert'
        description={
          <>
            <Text>Test React.NODE</Text>
            <Text>Test React.NODE</Text>
            <Text>Test React.NODE</Text>
          </>
        }
      />

      <Spacer size={SpacerSize.EIGHT} />
      <Alert status={StatusState.INFO} title='Banner Alert' />
      <Spacer size={SpacerSize.EIGHT} />

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
