import React from 'react'
import {
  Box,
  BoxContent,
  Section,
  Slider,
  SliderItem,
  Spacer,
  SpacerSize,
  Title,
  View,
} from '@trilogy-ds/react/components'
import { GapSize } from '@/components/columns/ColumnsTypes'
import { SliderRadiusValues } from '@/components/slider/SliderEnum'
import { Platform } from 'react-native'

const Panel = ({ label, bg }: { label: string; bg: string }): JSX.Element => {
  const isWeb = Platform.OS === 'web'

  return (
    <View
      style={{
        minHeight: isWeb ? '100%' : 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bg,
      }}
    >
      <Title className="is-centered" style={{ color: '#fff' }}>
        {label}
      </Title>
    </View>
  )
}

export const SliderScreen = (): JSX.Element => {
  const [playgroundAutoplay, setPlaygroundAutoplay] = React.useState(false)
  const [playgroundLoop, setPlaygroundLoop] = React.useState(true)
  const [playgroundFullBleed, setPlaygroundFullBleed] = React.useState(false)
  const [playgroundRadius, setPlaygroundRadius] = React.useState<SliderRadiusValues>(
    SliderRadiusValues.LARGE,
  )
  const [playgroundGap, setPlaygroundGap] = React.useState<GapSize | undefined>(GapSize.THREE)

  const isWeb = Platform.OS === 'web'

  return (
    <Section className="is-paddingless">
      {/* 1. Default */}
      <Box flat>
        <BoxContent>
          <Title className="is-centered">Default — one slide, loop</Title>
          <Slider loop radius={SliderRadiusValues.LARGE} accessibilityLabel="Default slider">
            <SliderItem>
              <Panel label="Slide 1" bg="#3d5d7e" />
            </SliderItem>
            <SliderItem>
              <Panel label="Slide 2" bg="#e6685e" />
            </SliderItem>
            <SliderItem>
              <Panel label="Slide 3" bg="#3fa06b" />
            </SliderItem>
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      {/* 2. Autoplay */}
      <Box flat>
        <BoxContent>
          <Title className="is-centered">Autoplay (2s) + loop</Title>
          <Slider
            autoplay
            autoplayDelay={2000}
            loop
            radius={SliderRadiusValues.LARGE}
            accessibilityLabel="Autoplay slider"
          >
            <SliderItem>
              <Panel label="Auto 1" bg="#6a4c93" />
            </SliderItem>
            <SliderItem>
              <Panel label="Auto 2" bg="#1982c4" />
            </SliderItem>
            <SliderItem>
              <Panel label="Auto 3" bg="#8ac926" />
            </SliderItem>
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      {/* 3. Responsive slidesPerView (desktop: 3, tablet: 2, mobile: 1) */}
      {isWeb&&<><Box flat>
        <BoxContent>
          <Title className="is-centered">
            Responsive slidesPerView — desktop: 3, tablet: 2, mobile: 1
          </Title>
          <Slider
            loop
            gap={GapSize.THREE}
            radius={SliderRadiusValues.LARGE}
            accessibilityLabel="Responsive slidesPerView slider"
            slidesPerView={{
              desktop: 3,
              tablet: 2,
              mobile: 1,
            }}
          >
            <SliderItem>
              <Panel label="Resp 1" bg="#3d5d7e" />
            </SliderItem>
            <SliderItem>
              <Panel label="Resp 2" bg="#e6685e" />
            </SliderItem>
            <SliderItem>
              <Panel label="Resp 3" bg="#3fa06b" />
            </SliderItem>
            <SliderItem>
              <Panel label="Resp 4" bg="#8e44ad" />
            </SliderItem>
            <SliderItem>
              <Panel label="Resp 5" bg="#f39c12" />
            </SliderItem>
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} /></>}

      {/* 4. Mobile-only fullBleed + gap example */}
      {!isWeb && (
        <>
          <Title className="is-centered">FullBleed + gap (mobile)</Title>
          <Spacer size={SpacerSize.THREE} />

          {/* No Box/BoxContent here so slider can go edge-to-edge on mobile */}
          <View style={{ width: '100%' }}>
            <Slider
              loop
              fullBleed
              gap={GapSize.NINE}
              accessibilityLabel="Mobile fullBleed slider"
            >
              <SliderItem>
                <Panel label="Mobile 1" bg="#264653" />
              </SliderItem>
              <SliderItem>
                <Panel label="Mobile 2" bg="#e76f51" />
              </SliderItem>
              <SliderItem>
                <Panel label="Mobile 3" bg="#2a9d8f" />
              </SliderItem>
            </Slider>
          </View>
        </>
      )}

      {/* 5. Playground – WEB ONLY */}
      {isWeb && (
        <Box flat>
          <BoxContent>
            <Title className="is-centered">Playground</Title>

            <Spacer size={SpacerSize.THREE} />

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                marginBottom: 16,
              }}
            >
              {/* Autoplay */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="checkbox"
                  checked={playgroundAutoplay}
                  onChange={(e) => setPlaygroundAutoplay(e.target.checked)}
                />
                <span>autoplay</span>
              </label>

              {/* Loop */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="checkbox"
                  checked={playgroundLoop}
                  onChange={(e) => setPlaygroundLoop(e.target.checked)}
                />
                <span>loop</span>
              </label>

              {/* FullBleed */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="checkbox"
                  checked={playgroundFullBleed}
                  onChange={(e) => setPlaygroundFullBleed(e.target.checked)}
                />
                <span>fullBleed (peek of neighboring slides)</span>
              </label>

              {/* Radius */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>radius</span>
                <select
                  value={playgroundRadius}
                  onChange={(e) => setPlaygroundRadius(e.target.value as SliderRadiusValues)}
                >
                  <option value={SliderRadiusValues.SMALL}>small (8px)</option>
                  <option value={SliderRadiusValues.MEDIUM}>medium (16px)</option>
                  <option value={SliderRadiusValues.LARGE}>large (24px)</option>
                </select>
              </label>

              {/* Gap */}
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>gap</span>
                <select
                  value={playgroundGap ?? ''}
                  onChange={(e) =>
                    setPlaygroundGap((e.target.value || undefined) as GapSize | undefined)
                  }
                >
                  <option value="">none</option>
                  <option value={GapSize.ONE}>ONE</option>
                  <option value={GapSize.TWO}>TWO</option>
                  <option value={GapSize.THREE}>THREE</option>
                  <option value={GapSize.FOUR}>FOUR</option>
                  <option value={GapSize.FIVE}>FIVE</option>
                  <option value={GapSize.SIX}>SIX</option>
                </select>
              </label>
            </View>

            <Slider
              autoplay={playgroundAutoplay}
              autoplayDelay={2000}
              loop={playgroundLoop}
              fullBleed={playgroundFullBleed}
              radius={playgroundRadius}
              gap={playgroundGap}
              accessibilityLabel="Playground slider"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <SliderItem key={i}>
                  <Panel label={`Play ${i + 1}`} bg={i % 2 ? '#3d5d7e' : '#e6685e'} />
                </SliderItem>
              ))}
            </Slider>
          </BoxContent>
        </Box>
      )}
    </Section>
  )
}
