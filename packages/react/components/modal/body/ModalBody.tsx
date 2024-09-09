import { Text } from '@/components/text'
import React from 'react'
import ModalContext from '../context'

const ModalBody = ({ content, children }:any): JSX.Element => {
  const { idDescription } = React.useContext(ModalContext)

  return (
    <>
      {content && typeof content === 'string' ? <Text {...{ id: idDescription }}>{content}</Text> : content}
      {children != null && children}
    </>
  )
}

export default ModalBody
