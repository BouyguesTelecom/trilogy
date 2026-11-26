import { Sticker } from "@trilogy-ds/react"

import { IconCamera, ScrollView } from "../components"
import { Wrapper } from "../components/wrapper"

export default function StickerScreen() {
  return (
    <ScrollView>
      <Wrapper title="Default">
        <Sticker>Information</Sticker>
        <Sticker background="primary">Code Promo</Sticker>
        <Sticker background="secondary">Succès</Sticker>
        <Sticker background="accent">Accent</Sticker>
        <Sticker background="brand">Nouveau</Sticker>
        <Sticker background="information">information</Sticker>
        <Sticker background="success">Attention</Sticker>
        <Sticker background="warning">Warrning</Sticker>
        <Sticker background="error">Error</Sticker>
      </Wrapper>

      <Wrapper title="Small">
        <Sticker background="primary-subtle" size="small">
          Code Promo
        </Sticker>
        <Sticker background="secondary-subtle" size="small">
          Succès
        </Sticker>
        <Sticker background="accent-subtle" size="small">
          Accent
        </Sticker>
        <Sticker background="brand-subtle" size="small">
          Nouveau
        </Sticker>
        <Sticker background="information-subtle" size="small">
          information
        </Sticker>
        <Sticker background="success-subtle" size="small">
          Success
        </Sticker>
        <Sticker background="warning-subtle" size="small">
          Warning
        </Sticker>
        <Sticker background="error-subtle" size="small">
          Error
        </Sticker>
      </Wrapper>

      <Wrapper title="Icon">
        <Sticker background="accent">
          <IconCamera />
          Photo
        </Sticker>
      </Wrapper>

      <Wrapper title="Never wraps">
        <Sticker>Une information beaucoup trop longue pour un sticker</Sticker>
      </Wrapper>
    </ScrollView>
  )
}
