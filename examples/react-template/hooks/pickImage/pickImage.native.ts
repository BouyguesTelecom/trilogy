import { IPromptAiFile, PromptAiContext } from '@trilogy-ds/react/components/promptAi/context'
import * as ImagePicker from 'expo-image-picker'
import { useContext } from 'react'

export default function usePickImage() {
  const { files, setFiles } = useContext(PromptAiContext)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.canceled)
      setFiles((prev) => [
        ...prev,
        {
          type: result.assets[0].type,
          name: result.assets[0].fileName,
          src: result.assets[0].uri,
        } as IPromptAiFile,
      ])
  }

  return {
    images: files,
    pickImage,
  }
}
