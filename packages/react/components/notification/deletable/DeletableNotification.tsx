/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react"
import { DeletableNotificationProps } from "./DeletableNotificationProps"

/**
 * Deletable Notification
 * @param iconName {IconName} Icon Name Type
 * @param title {string} Deletable notification title
 * @param deletable {ClickEvent} Click event
 * @param read {boolean} If notification has been read
 */
const DeletableNotification = ({
  iconName,
  title,
  deletable,
  read,
}: DeletableNotificationProps): JSX.Element => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>
}

export default DeletableNotification
