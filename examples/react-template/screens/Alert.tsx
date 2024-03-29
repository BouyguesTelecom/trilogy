import React from 'react'
import { Alert, Container, Spacer, TitleLevels, View, Title, Divider, AutoLayout } from '@trilogy-ds/react/components'
import { AlertState } from '@trilogy-ds/react/objects'

export const AlertScreen = (): JSX.Element => {
  return (
    <Container>
      <View>
        {Object.values(AlertState).map((alert, index) => {
          return (
            <AutoLayout key={index}>
              <Title level={TitleLevels.TWO}>AlertState : {alert}</Title>
              <Spacer size={10} />
              <Alert
                display
                alert={alert}
                title={alert}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
              />
              <Divider />
            </AutoLayout>
          )
        })}
      </View>
    </Container>
  )
}
