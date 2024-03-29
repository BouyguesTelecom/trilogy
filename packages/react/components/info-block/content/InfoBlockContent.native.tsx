import React from 'react'
import { StyleSheet, View } from 'react-native'
import { InfoBlockContentProps } from './InfoBlockContentProps'
import { ComponentName } from '../../enumsComponentsName'

/**
 * Info Block Content
 * @param children {React.ReactNode} Children content
 */
const InfoBlockContent = ({ children, ...others }: InfoBlockContentProps): JSX.Element => {
  const styles = StyleSheet.create({
    infoBlock: {
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      paddingBottom: 10,
    },
  })

  return (
    <View style={styles.infoBlock} {...others}>
      {children}
    </View>
  )
}

InfoBlockContent.displayName = ComponentName.InfoBlockContent

export default InfoBlockContent
