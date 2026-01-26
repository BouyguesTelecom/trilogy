import { IPromptFile } from '@trilogy-ds/react/components/promptAi/context'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export default function usePickImage() {
  const [files, setFiles] = useState<IPromptFile[]>([])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.canceled) {
      setFiles((prev) => [
        ...prev,
        {
          type: result.assets[0].type,
          name: result.assets[0].fileName,
          src: result.assets[0].uri,
        } as IPromptFile,
      ])
      return true
    }
    return false
  }

  const pickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync()
    if (!result.canceled) {
      setFiles((prev) => [
        ...prev,
        {
          type: result.assets[0].mimeType,
          name: result.assets[0].name,
          src: result.assets[0].uri,
        } as IPromptFile,
      ])
      return true
    }
    return false
  }

  const deleteFile = (index: number) => {
    setFiles((prev) => {
      const copy = [...prev]
      copy.splice(index, 1)
      return copy
    })
  }

  const deleteAllFiles = () => {
    setFiles([])
  }

  return {
    files,
    pickImage,
    pickFile,
    deleteFile,
    deleteAllFiles,
    handleFileChange: () => undefined,
  }
}
