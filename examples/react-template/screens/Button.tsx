import {
  AutoLayout,
  Button,
  ButtonList,
  ButtonVariant,
  Columns,
  ColumnsItem,
  Divider,
  IconName,
  Spacer,
  Title,
  TitleLevels,
} from '@trilogy-ds/react/components'
import React from 'react'

const Separator = () => {
  return (
    <>
      <Spacer size={10}/>
      <Divider/>
      <Spacer size={50}/>
    </>
  )
}

export const ButtonScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      {/*  ======== variants ======== */}
      <Title level={TitleLevels.TWO}>Variant </Title>
      <Spacer size={10}/>
      {Object.values(ButtonVariant).map((variant, index) => {
        return (
          <Button variant={variant} fullwidth>
            {variant}
          </Button>
        )
      })}
      <Separator/>

      {/*  ======== loading & variant ======== */}
      <Title level={TitleLevels.TWO}>loading + variant </Title>
      <Spacer size={10}/>
      {Object.values(ButtonVariant).map((color, index) => {
        return (
          <Button variant={color} fullwidth loading>
            {color}
          </Button>
        )
      })}
      <Separator/>

      {/*  ======== disabled & variant ======== */}
      <Title level={TitleLevels.TWO}>disabled + variant </Title>
      <Spacer size={10}/>
      <Columns inlined>
        {Object.values(ButtonVariant).map((color, index) => {
          return (
            <ColumnsItem key={index} size={4}>
              <Button variant={color} fullwidth disabled>
                {color}
              </Button>
            </ColumnsItem>
          )
        })}
      </Columns>
      <Separator/>

      {/*  ======== fullwidth ======== */}
      <Title level={TitleLevels.TWO}>fullwidth </Title>
      <Spacer size={10}/>
      <Button fullwidth variant={'PRIMARY'}>
        Cliquer
      </Button>
      <Separator/>

      {/*  ======== icons ======== */}
      <Title level={TitleLevels.TWO}>iconName </Title>
      <Spacer size={10}/>
      <ButtonList>
        <Button iconName={IconName.TIMES} variant={'ACCENT'}>
          Icon Accent
        </Button>
        <Button iconName={IconName.ARROW_DOWN} variant={'PRIMARY'}>
          Icon Primary
        </Button>
        <Button iconName={IconName.EYE} variant={'SECONDARY'}>
          Icon Secondary
        </Button>
        <Button iconName={IconName.SEARCH} variant={'GHOST'}>
          Icon Ghost
        </Button>
      </ButtonList>
    </AutoLayout>
  )
}
