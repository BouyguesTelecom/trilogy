import { isMobile, StatusState } from '@trilogy-ds/react'
import {
  Alert,
  Box,
  BoxContent,
  Button,
  Column,
  Columns,
  Container,
  IconName,
  Spacer,
  SpacerSize,
  Title,
  TitleLevels,
  ToasterAlertProvider,
  ToasterContext,
  View,
} from '@trilogy-ds/react/components'
import { AlertMarkup } from '@trilogy-ds/react/components/alert/AlertEnum'
import { ToasterAlertPosition } from '@trilogy-ds/react/components/alert/AlertProps'
import React, { useContext, useState } from 'react'

const ToasterAlertView: React.FC = () => {
  const [offset] = useState(50)
  const [duration] = useState(5000)
  const [title] = useState('Ceci est un titre changeable')
  const [description] = useState(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  )

  const { show } = useContext(ToasterContext)

  const onClickToaster = () => {
    show({
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
      markup: 'h2',
    })
  }

  return (
    <Button variant={'PRIMARY'} onClick={onClickToaster}>
      Open toast
    </Button>
  )
}

export const AlertScreen = (): JSX.Element => {
  return (
    <ToasterAlertProvider>
      <Container>
        <View>
          <>
            <Title level={TitleLevels.THREE}>Toaster alert</Title>
            <Spacer size={SpacerSize.THREE} />
            <Box flat>
              <BoxContent>
                <ToasterAlertView />
              </BoxContent>
            </Box>
            <Spacer size={SpacerSize.SEVEN} />
          </>

          <>
            <Title level={TitleLevels.THREE}>Status</Title>
            <Spacer size={SpacerSize.THREE} />
            <Box flat>
              <BoxContent>
                <Columns multiline>
                  {Object.values(StatusState).map((alert, index) => {
                    return (
                      <Column size={isMobile ? 12 : 6} key={index}>
                        <Title level={TitleLevels.FIVE}>StatusState : {alert}</Title>
                        <Alert
                          display
                          status={alert}
                          title={alert}
                          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
                        />
                      </Column>
                    )
                  })}
                </Columns>
              </BoxContent>
            </Box>
            <Spacer size={SpacerSize.SEVEN} />
          </>

          <>
            <Title level={TitleLevels.THREE}>Markup</Title>
            <Spacer size={SpacerSize.THREE} />
            <Box flat>
              <BoxContent>
                <Columns multiline>
                  {Object.values(AlertMarkup).map((markup, index) => {
                    return (
                      <Column size={isMobile ? 12 : 6} key={index}>
                        <Title level={TitleLevels.FIVE}>markup : {markup}</Title>
                        <Alert
                          markup={markup}
                          display
                          status='INFO'
                          title={`Ceci est un <${markup}>`}
                          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
                        />
                      </Column>
                    )
                  })}
                </Columns>
              </BoxContent>
            </Box>
          </>
        </View>
      </Container>
    </ToasterAlertProvider>
  )
}
