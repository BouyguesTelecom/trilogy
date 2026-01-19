export default function usePickImage({ closeModal }: { closeModal?: () => void }) {
  return {
    images: [],
    pickImage: () => undefined,
    pickFile: () => undefined,
  }
}
