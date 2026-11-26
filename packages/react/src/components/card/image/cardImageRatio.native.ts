import { useEffect, useState } from "react"
import { Image } from "react-native"

/** Natural width-to-height ratio of an image, or undefined while disabled or not yet known. */
export function useImageRatio(
  uri: string,
  enabled: boolean
): number | undefined {
  const [ratio, setRatio] = useState<number>()

  useEffect(() => {
    if (!enabled) return
    let active = true
    Image.getSize(
      uri,
      (width, height) => {
        if (active && height > 0) setRatio(width / height)
      },
      () => {}
    )
    return () => {
      active = false
    }
  }, [uri, enabled])

  return enabled ? ratio : undefined
}
