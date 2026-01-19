import { IPromptAiFile, PromptAiContext } from '@trilogy-ds/react/components/promptAi/context'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'
import { useContext } from 'react'

export default function usePickImage({ closeModal }: { closeModal?: () => void }) {
  const { files, setFiles } = useContext(PromptAiContext)

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
        } as IPromptAiFile,
      ])
      closeModal && closeModal()
    }
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
        } as IPromptAiFile,
      ])
      closeModal && closeModal()
    }
  }

  return {
    images: files,
    pickImage,
    pickFile,
  }
}
