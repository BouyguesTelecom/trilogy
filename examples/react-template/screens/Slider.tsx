import {
  Box,
  BoxContent,
  Section,
  Slider,
  SliderItem,
  Spacer,
  SpacerSize,
  Text,
  Title,
  View,
} from '@trilogy-ds/react/components'
import * as React from 'react'

const Panel = ({ label, bg }: { label: string; bg: string }): JSX.Element => (
  <View
    style={{
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bg,
    }}
  >
    <Title className='is-centered' style={{ color: '#fff' }}>
      {label}
    </Title>
  </View>
)

export const SliderScreen = (): JSX.Element => {
  return (
    <Section>
      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Default — one slide, loop</Title>
          <Slider loop ariaLabel='Default slider'>
            <SliderItem>
              <Panel label='Slide 1' bg='#3d5d7e' />
            </SliderItem>
            <SliderItem>
              <Panel label='Slide 2' bg='#e6685e' />
            </SliderItem>
            <SliderItem>
              <Panel label='Slide 3' bg='#3fa06b' />
            </SliderItem>
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Autoplay (2s) + loop</Title>
          <Slider autoplay autoplayDelay={2000} loop ariaLabel='Autoplay slider'>
            <SliderItem>
              <Panel label='Auto 1' bg='#6a4c93' />
            </SliderItem>
            <SliderItem>
              <Panel label='Auto 2' bg='#1982c4' />
            </SliderItem>
            <SliderItem>
              <Panel label='Auto 3' bg='#8ac926' />
            </SliderItem>
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Multiple per view + spacing</Title>
          <Slider slidesPerView={2} spaceBetween={16} ariaLabel='Multi slider'>
            {Array.from({ length: 6 }).map((_, i) => (
              <SliderItem key={i}>
                <Panel label={`Item ${i + 1}`} bg={i % 2 ? '#457b9d' : '#e63946'} />
              </SliderItem>
            ))}
          </Slider>
        </BoxContent>
      </Box>

      <Spacer size={SpacerSize.FOUR} />

      <Box flat>
        <BoxContent>
          <Title className='is-centered'>Responsive breakpoints</Title>
          <Text>1 slide on mobile, 2 on tablet, 3 on desktop.</Text>
          <Slider
            slidesPerView={1}
            spaceBetween={12}
            breakpoints={{
              tablet: { slidesPerView: 2, spaceBetween: 16 },
              desktop: { slidesPerView: 3, spaceBetween: 24 },
            }}
            ariaLabel='Responsive slider'
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <SliderItem key={i}>
                <Panel label={`Card ${i + 1}`} bg={i % 2 ? '#2a9d8f' : '#264653'} />
              </SliderItem>
            ))}
          </Slider>
        </BoxContent>
      </Box>
    </Section>
  )
}
