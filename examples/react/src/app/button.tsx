import {
  Button,
  ButtonList,
  ButtonVariant,
  Divider,
  IconName,
  Spacer,
  Icon,
  Title,
  TitleLevels,
  ButtonListDirectionEnum,
  Alignable,
} from '@trilogy-ds/react'
import { Screen } from '@/components/screen'

const Separator = () => {
  return (
    <>
      <Spacer size={'10'} />
      <Divider />
      <Spacer size={'50'} />
    </>
  )
}

export default function ButtonScreen(): JSX.Element {
  return (
    <Screen>
      {/*  ======== variants ======== */}
      <Title level={TitleLevels.TWO}>Variant </Title>
      <Button variant={ButtonVariant.PRIMARY}>
        Primary
        <Icon backgroundColor='accent' name={IconName.ARROW_RIGHT} />
      </Button>
      <Spacer size={'10'} />
      <ButtonList>
        {Object.values(ButtonVariant).map((variant, index) => {
          return (
            <Button variant={variant} key={index}>
              {variant}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />
      {/*  ======== list column ======== */}
      <Title level={TitleLevels.TWO}>List column</Title>
      <Spacer size={'10'} />
      <ButtonList direction={ButtonListDirectionEnum.COLUMN} align={Alignable.ALIGNED_START}>
        {Object.values(ButtonVariant).map((variant, index) => {
          return (
            <Button variant={variant} key={index}>
              {variant}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      <Title level={TitleLevels.TWO}>Icon</Title>
      <Button iconName={IconName.SEARCH} variant={ButtonVariant.PRIMARY} />

      <Title level={TitleLevels.TWO}>Link</Title>
      <Button disabled variant={ButtonVariant.PRIMARY} href='/hello'>
        Hello !
      </Button>

      {/*  ======== loading & variant ======== */}
      <Title level={TitleLevels.TWO}>loading + variant </Title>
      <Spacer size={'10'} />
      <ButtonList>
        {Object.values(ButtonVariant).map((color, index) => {
          return (
            <Button variant={color} key={index} loading>
              {color}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      {/*  ======== disabled & variant ======== */}
      <Title level={TitleLevels.TWO}>disabled + variant </Title>
      <Spacer size={'10'} />
      <ButtonList>
        {Object.values(ButtonVariant).map((color, index) => {
          return (
            <Button variant={color} key={index} disabled>
              {color}
            </Button>
          )
        })}
      </ButtonList>
      <Separator />

      {/*  ======== fullwidth ======== */}
      <Title level={TitleLevels.TWO}>fullwidth </Title>
      <Spacer size={'10'} />
      <Button fullwidth variant='primary'>
        Cliquer
      </Button>
      <Separator />

      {/*  ======== icons ======== */}
      <Title level={TitleLevels.TWO}>iconName </Title>
      <Spacer size={'10'} />
      <ButtonList>
        <Button iconName={IconName.TIMES} variant='accent'>
          Icon Conversion
        </Button>
        <Button iconName={IconName.ARROW_DOWN} variant='primary'>
          Icon Primary
        </Button>
        <Button iconName={IconName.EYE} variant='secondary'>
          Icon Secondary
        </Button>
        <Button iconName={IconName.SEARCH} variant='ghost'>
          Icon Ghost
        </Button>
      </ButtonList>
    </Screen>
  )
}
