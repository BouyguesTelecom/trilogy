import { IconName } from '@trilogy-ds/react/lib/components/icon'
import { Radio, RadioList, RadioTile, RadioTiles } from '@trilogy-ds/react/lib/components/radio'
import { Alignable } from '@trilogy-ds/react/lib/objects/facets/Alignable'

export default function RadioScreen() {
  return (
    <>
      <RadioList>
        <Radio name='name-1' label='Label' value='one' id='checkbox1' />
        <Radio name='name-1' label='Label' value='two' id='checkbox2' />
        <Radio name='name-1' label='Label' value='three' disabled id='checkbox3' />
        <Radio name='name-1' label='read only' value='four' readonly id='checkbox4' />
      </RadioList>

      <RadioTiles>
        <RadioTile
          disabled
          id='tile-1'
          label='label'
          value='one'
          description='Je suis'
          className='is-fullheight'
          name={'name-tile-1'}
        />
        <RadioTile
          id='tile-2'
          label='label'
          value='two'
          description='Je suis une'
          icon={IconName.ALERT}
          name={'name-tile-1'}
        />
        <RadioTile
          id='tile-3'
          label='label'
          value='three'
          description='Je suis une description simple'
          icon={IconName.ALERT}
          name={'name-tile-1'}
        />
      </RadioTiles>

      <RadioTiles align={Alignable.ALIGNED_CENTER}>
        <RadioTile
          id='tile-horizontal-1'
          label='label'
          value='one'
          description='Je suis une description simple'
          icon={IconName.ALERT}
          horizontal
          name={'name-tile-2'}
        />
        <RadioTile
          id='tile-horizontal-2'
          label='label'
          value='two'
          description='Je suis une description simple'
          icon={IconName.ALERT}
          horizontal
          name={'name-tile-2'}
        />
        <RadioTile
          id='tile-horizontal-3'
          label='label'
          value='three'
          description='Je suis une description simple'
          icon={IconName.ALERT}
          horizontal
          name={'name-tile-2'}
        />
      </RadioTiles>
    </>
  )
}
