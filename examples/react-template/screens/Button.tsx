import {
  Button,
  ButtonColor,
  ButtonMarkup,
  Columns,
  ColumnsItem,
  IconName,
  Spacer,
  Divider,
  Title,
  TitleLevels,
  AutoLayout,
  ButtonList,
} from '@trilogy-ds/react/components'
import React from 'react'

const Separator = () => {
  return (
    <>
      <Spacer size={10} />
      <Divider />
      <Spacer size={50} />
    </>
  )
}

export const ButtonScreen = (): JSX.Element => {
  return (
    <AutoLayout>
      {/*  ======== variants ======== */}
      <Title level={TitleLevels.TWO}>variant </Title>
      <Spacer size={10} />
      <Columns inlined>
        {Object.values(ButtonColor).map((color, index) => {
          return (
            <ColumnsItem key={index} size={4}>
              <Button variant={color} fullwidth>
                {color}
              </Button>
            </ColumnsItem>
          )
        })}
      </Columns>
      <Separator />

      {/*  ======== loading & variant ======== */}
      <Title level={TitleLevels.TWO}>loading + variant </Title>
      <Spacer size={10} />
      <Columns inlined>
        {Object.values(ButtonColor).map((color, index) => {
          return (
            <ColumnsItem key={index} size={4}>
              <Button variant={color} fullwidth loading>
                {color}
              </Button>
            </ColumnsItem>
          )
        })}
      </Columns>
      <Separator />

      {/*  ======== disabled & variant ======== */}
      <Title level={TitleLevels.TWO}>disabled + variant </Title>
      <Spacer size={10} />
      <Columns inlined>
        {Object.values(ButtonColor).map((color, index) => {
          return (
            <ColumnsItem key={index} size={4}>
              <Button variant={color} fullwidth disabled>
                {color}
              </Button>
            </ColumnsItem>
          )
        })}
      </Columns>
      <Separator />

      {/*  ======== fullwidth ======== */}
      <Title level={TitleLevels.TWO}>fullwidth </Title>
      <Spacer size={10} />
      <Button fullwidth variant={'PRIMARY'}>
        Cliquer
      </Button>
      <Separator />

      {/*  ======== icons ======== */}
      <Title level={TitleLevels.TWO}>iconName </Title>
      <Spacer size={10} />
      <ButtonList>
        <Button iconName={IconName.TIMES} variant={'PRIMARY'}>
          Icon Primary
        </Button>
        <Button iconName={IconName.ARROW_DOWN} variant={'SECONDARY'}>
          Icon Primary
        </Button>
        <Button iconName={IconName.EYE} variant={'TERTIARY'}>
          Icon Primary
        </Button>
        <Button iconName={IconName.SEARCH} variant={'TERTIARY'}></Button>
      </ButtonList>
    </AutoLayout>
  )
}
