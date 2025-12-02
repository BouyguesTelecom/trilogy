import { Align, BoxContent, ButtonVariant, Container, DirectionEnum, Justify, TrilogyColor, TypographyBold, View } from '@trilogy-ds/react'
import { Box, Button, FlexBox, FlexItem, GapSize, Icon, IconName, IconSize, Section, Switch, Text, TextLevels, Title, TitleLevels } from '@trilogy-ds/react/components'
import { useRef, useState, useEffect } from 'react'

export const QueryContainerScreen = (): JSX.Element => {
  // Pas besoin d'injection de styles CSS
  // Premier élément redimensionnable
  const resizeRef1 = useRef<HTMLDivElement>(null)
  const [isResizing1, setIsResizing1] = useState(false)
  const [width1, setWidth1] = useState(300)

  // Deuxième élément redimensionnable
  const resizeRef2 = useRef<HTMLDivElement>(null)
  const [isResizing2, setIsResizing2] = useState(false)
  const [width2, setWidth2] = useState(350)

  // Référence pour la div query-container_410
  const queryContainerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Fonction pour mettre à jour la taille du container
  const updateContainerWidth = () => {
    if (queryContainerRef.current) {
      const rect = queryContainerRef.current.getBoundingClientRect()
      setContainerWidth(Math.round(rect.width))
    }
  }

  // Observer pour détecter les changements de taille
  useEffect(() => {
    updateContainerWidth() // Taille initiale
    
    if (!queryContainerRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      updateContainerWidth()
    })
    
    resizeObserver.observe(queryContainerRef.current)
    
    return () => resizeObserver.disconnect()
  }, [])

  // Logique pour le premier élément
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing1 || !resizeRef1.current) return
      
      const rect = resizeRef1.current.getBoundingClientRect()
      const newWidth = rect.right - e.clientX
      
      if (newWidth >= 200 && newWidth <= window.innerWidth * 0.8) {
        setWidth1(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing1(false)
      document.body.classList.remove('resizing')
    }

    if (isResizing1) {
      document.body.classList.add('resizing')
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.classList.remove('resizing')
    }
  }, [isResizing1])

  // Logique pour le deuxième élément
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing2 || !resizeRef2.current) return
      
      const rect = resizeRef2.current.getBoundingClientRect()
      const newWidth = rect.right - e.clientX
      
      if (newWidth >= 200 && newWidth <= window.innerWidth * 0.8) {
        setWidth2(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing2(false)
      document.body.classList.remove('resizing')
    }

    if (isResizing2) {
      document.body.classList.add('resizing')
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.body.classList.remove('resizing')
    }
  }, [isResizing2])

  const handleMouseDown1 = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing1(true)
  }

  const handleMouseDown2 = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing2(true)
  }
  return (
    <>
        <Section backgroundColor={TrilogyColor.NEUTRAL_FADE}>
          <Title level={TitleLevels.THREE}>Sans CSS Container Queries</Title>
          <FlexBox>
            <FlexItem>
              <FlexBox wrap>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
                <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                  <Box>CarteOffreMobile00000</Box>
                </FlexItem>
              </FlexBox>
            </FlexItem>
            <FlexItem
              size={3}
              ref={resizeRef1}
              style={{
                width: `${width1}px`,
                flexBasis: `${width1}px`,
                flexGrow: 0,
                flexShrink: 0,
                position: 'relative',
                minWidth: '200px',
                maxWidth: '80%'
              }}
            >
              <Box fullheight backgroundColor={TrilogyColor.MAIN}>
                <Title inverted level={4}>Assistant Digital</Title>
              </Box>
              <div
                onMouseDown={handleMouseDown1}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '12px',
                  height: '100%',
                  cursor: 'col-resize',
                  background: 'rgba(0, 123, 255, 0.4)',
                  border: '2px solid #007bff',
                  zIndex: 11,
                  borderRadius: '0 4px 4px 0'
                }}
                title="Glisser pour redimensionner"
              />
            </FlexItem>
          </FlexBox>
        </Section>
      <Section backgroundColor={TrilogyColor.ACCENT_FADE}>
      {/* Premier FlexBox */}

      <Title level={TitleLevels.THREE}>Avec CSS Container Queries</Title>
      <Text level={TextLevels.TWO}>
        Container Query size : <strong className='title_410 is-level-3_410'>{containerWidth}px</strong>
      </Text>
      <FlexBox>
        <FlexItem>
          <View ref={queryContainerRef} className={"query-container_410 has-background-main-fade_410"} >
            <FlexBox wrap>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
              <FlexItem size={{mobile: 12, desktop: 4, tablet: 6, fullHd: 3}}>
                <Box>CarteOffreMobile00000</Box>
              </FlexItem>
            </FlexBox>
          </View>
        </FlexItem>
          <FlexItem
            size={3}
            ref={resizeRef2}
            style={{
              width: `${width2}px`,
              flexBasis: `${width2}px`,
              flexGrow: 0,
              flexShrink: 0,
              position: 'relative',
              minWidth: '200px',
              maxWidth: '80%'
            }}
          >
            <Box fullheight backgroundColor={TrilogyColor.MAIN}>
              <Title inverted level={4}>Assistant Digital</Title>
            </Box>
            <div
              onMouseDown={handleMouseDown2}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '12px',
                height: '100%',
                cursor: 'col-resize',
                background: 'rgba(0, 123, 255, 0.4)',
                border: '2px solid #007bff',
                zIndex: 11,
                borderRadius: '0 4px 4px 0'
              }}
              title="Glisser pour redimensionner"
            />
          </FlexItem>
      </FlexBox>

    </Section>

    </>
  )
}
