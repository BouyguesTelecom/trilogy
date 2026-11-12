import { IconCamera } from "@/components"
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@trilogy-ds/react"

import { Wrapper } from "../components/wrapper"

export default function AlertScreen() {
  return (
    <>
      <Wrapper title="Buttons">
        <Alert status="success">
          <IconCamera />
          <AlertContent>
            <AlertTitle>Lorem, ipsum dolor sit amet</AlertTitle>
            <AlertDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit temporibus vel voluptatibus dicta cumque! Vero, tempore hic
              cumque nobis ipsum nulla aperiam deserunt animi. Id voluptate
              cupiditate optio molestiae.
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert status="warning">
          <IconCamera />
          <AlertContent>
            <AlertTitle>Lorem, ipsum dolor sit amet</AlertTitle>
            <AlertDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit temporibus vel voluptatibus dicta cumque! Vero, tempore hic
              cumque nobis ipsum nulla aperiam deserunt animi. Id voluptate
              cupiditate optio molestiae.
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert status="error">
          <IconCamera />
          <AlertContent>
            <AlertTitle>Lorem, ipsum dolor sit amet</AlertTitle>
            <AlertDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit temporibus vel voluptatibus dicta cumque! Vero, tempore hic
              cumque nobis ipsum nulla aperiam deserunt animi. Id voluptate
              cupiditate optio molestiae.Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Illum odit temporibus vel voluptatibus dicta
              cumque! Vero, tempore hic cumque nobis ipsum nulla aperiam
              deserunt animi. Id voluptate cupiditate optio molestiae.
            </AlertDescription>
          </AlertContent>
        </Alert>

        <Alert status="information">
          <IconCamera />
          <AlertContent>
            <AlertTitle>Lorem, ipsum dolor sit amet</AlertTitle>
            <AlertDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              odit temporibus vel voluptatibus dicta cumque! Vero, tempore hic
              cumque nobis ipsum nulla aperiam deserunt animi. Id voluptate
              cupiditate optio molestiae.
            </AlertDescription>
          </AlertContent>
        </Alert>
      </Wrapper>
    </>
  )
}
