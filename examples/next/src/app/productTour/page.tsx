import { ArrowDirection, AvatarDirection, ProductTour } from '@trilogy-ds/react/lib/components/product-tour'

export default function ProductTourSSR() {
  return (
    <div>
      <main>
        <ProductTour
          avatarDirection={AvatarDirection.LEFT}
          active
          closeable
          arrowDirection={ArrowDirection.UP}
          avatarSrc='https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg'
        >
          <text>Product tour text content</text>
        </ProductTour>
      </main>
    </div>
  )
}
