import React from 'react'
import {
  Section,
  Title,
  TitleLevels,
  Divider,
  ButtonMarkup,
  Notification,
  IconName,
} from '@trilogy-ds/react/components'
import { AlertState } from '@trilogy-ds/react/objects'

export const NotificationScreen = (): JSX.Element => {
  return (
    <Section>
      <Title level={TitleLevels.THREE}>Base</Title>
      <Notification title="Notification" />
      <Divider />
      <Title level={TitleLevels.THREE}>Status</Title>

      <Notification title="Notification info" info />
      <Notification title="Notification success" alert={AlertState.SUCCESS} info />
      <Notification title="Notification warning" alert={AlertState.WARNING} info />
      <Notification title="Notification error" alert={AlertState.ERROR} info />

      <Notification alert={AlertState.INFO} title="Notification" />
      <Notification alert={AlertState.SUCCESS} title="Notification" />
      <Notification alert={AlertState.WARNING} title="Notification" />
      <Notification alert={AlertState.ERROR} title="Notification" />
      <Title level={TitleLevels.THREE}>With Description props</Title>
      <Notification
        title="Notification"
        description="Reprehenderit eiusmod duis eu consectetur deserunt enim esse est do mollit. Aliqua et velit et culpa nulla veniam tempor veniam voluptate nulla. Nisi est sunt incididunt irure in ullamco eiusmod sunt. Reprehenderit incididunt labore qui culpa cillum eiusmod ex non aute ea Lorem. Incididunt laborum quis consequat commodo laborum consectetur id anim elit pariatur."
      />

      <Title level={TitleLevels.THREE}>With content</Title>
      <Notification
        alert={AlertState.INFO}
        title="Notification with button"
        buttonContent="Valider"
        buttonMarkup={ButtonMarkup.BUTTON}
        // buttonVariant={VariantState.PRIMARY}
        // eslint-disable-next-line no-alert
        buttonClick={() => alert('Test call to action click event')}
      />
      <Notification title="Notification with arrow" arrow />
      <Notification title="Notification info" info hasIcon={false} />
      <Title level={TitleLevels.THREE}>Banner version</Title>
      <Notification description="Banner notification description" banner iconName={IconName.BELL} />
    </Section>
  )
}
