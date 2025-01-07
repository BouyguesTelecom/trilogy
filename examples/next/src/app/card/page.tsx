import { Card, CardContent, CardImage } from '@trilogy-ds/react/lib/components/card'

export default function CardSSR() {
  return (
    <div>
      <main>
        <Card>
          <CardContent>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu, vulputate
              vera. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque eu,
              vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at neque
              eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam at
              neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex, aliquam
              at neque eu, vulputate vera.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula ex,
              aliquam at neque eu, vulputate vera.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardImage src='https://i.etsystatic.com/10951167/r/il/df66c4/1860902191/il_570xN.1860902191_kuoj.jpg' />
          <CardContent></CardContent>
        </Card>
      </main>
    </div>
  )
}
