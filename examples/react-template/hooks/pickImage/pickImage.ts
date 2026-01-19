import { IPromptAiFile } from '@trilogy-ds/react/components/promptAi/context'
import { useState } from 'react'

export default function usePickImage() {
  const [files, setFiles] = useState<IPromptAiFile[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file)
      setFiles((prev) => [...prev, { type: 'image', name: file.name, src: imageUrl }])
    } else {
      setFiles((prev) => [...prev, { type: file.type, name: file.name, src: '' }])
    }
    e.target.value = ''
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
    pickImage: async () => undefined,
    pickFile: async () => undefined,
    handleFileChange,
    deleteFile,
    deleteAllFiles,
  }
}
