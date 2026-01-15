import { IPromptAiFile } from '@trilogy-ds/react/components/promptAi/context'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'

export default function usePickImage() {
  const [images, setImages] = useState<IPromptAiFile[]>([])

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.canceled)
      setImages((prev) => [
        ...prev,
        {
          type: result.assets[0].type,
          name: result.assets[0].fileName,
          src: result.assets[0].uri,
        } as IPromptAiFile,
      ])
  }

  return {
    images,
    pickImage,
  }
}
