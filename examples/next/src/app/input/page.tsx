import { IconName } from '@trilogy-ds/react/lib/components/icon'
import { Input, InputStatus, InputType } from '@trilogy-ds/react/lib/components/input'

export default function InputScreen() {
  return (
    <div>
      <main>
        <Input
          label='Input label not dynamic with sample'
          sample='Input sample'
          help='Search helper input'
          placeholder="I'm a placeholder"
          required
          iconNameRight={IconName.ARROW_LEFT}
        />

        <Input
          label='Input label not dynamic with sample'
          sample='Input sample'
          help='Search helper input'
          required
          iconNameLeft={IconName.ARROW_LEFT}
        />

        <Input
          label='Input label not dynamic without sample'
          help='Search helper input'
          required
          iconNameLeft='tri-search'
        />

        <Input type={InputType.DATE} placeholder='Start' name='leavingDate' />

        <Input accessibilityLabel={'input base'} placeholder={'Label input'} />

        <Input
          minLength={10}
          maxLength={12}
          onKeyPress={() => console.log('key')}
          help='Do not display upper padding when there is no placeholder'
          type={InputType.TEXT}
        />

        <Input help='Do not display upper padding when there is no placeholder' type={InputType.TEXT} />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          iconNameRight={IconName.ALERT}
          placeholder='Placeholder with activated search'
        />

        <Input
          help='CustomIcon takes precedence over the display of the search to avoid displaying 2 icons, one above the other.'
          type={InputType.TEXT}
          iconNameRight={IconName.ALERT}
          placeholder='Placeholder with activated search'
        />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          status={InputStatus.SUCCESS}
          iconNameRight={IconName.ALERT}
          placeholder='This is my placeholder'
        />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          patternValidator={new RegExp(/^hello/, 'i')}
          iconNameRight={IconName.ALERT}
          placeholder='Pattern start by hello'
        />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          customValidator={(value) => (value === 'machin' ? InputStatus.SUCCESS : InputStatus.WARNING)}
          iconNameRight={IconName.ALERT}
          placeholder='Custom validator value="machin"'
        />

        <Input
          forceControl
          status={InputStatus.SUCCESS}
          iconNameRight={IconName.BELL}
          placeholder='Forced control formatted normal input'
        />

        <Input
          forceControl
          status={InputStatus.SUCCESS}
          iconNameRight={IconName.CHECK_CIRCLE}
          placeholder='Placeholder in success input type'
        />

        <Input type={InputType.TEXT} placeholder='Input type texte' />
        <Input type={InputType.NUMBER} placeholder='Input type number' />
        <Input iconNameLeft='tri-alert' type={InputType.PASSWORD} placeholder='Input type password' />
        <Input type={InputType.DATE} placeholder='Input type date' />
        <Input type={InputType.EMAIL} placeholder='Input type mail' />
        <Input iconNameLeft='tri-alert' type={InputType.SEARCH} placeholder='Input type mail' />

        <Input
          help='This password does not meet the security requirements.'
          type={InputType.TEXT}
          status={InputStatus.ERROR}
          placeholder='This is an error message'
        />

        <Input help='this is my help message' type={InputType.TEXT} placeholder='This is my placeholder' />

        <Input
          help='this is my help message'
          type={InputType.TEXT}
          placeholder='This is my placeholder'
          iconNameLeft={IconName.INFOS_CIRCLE}
        />

        <Input
          type='password'
          securityGauge
          placeholder='this is my placeholder'
          minLength={8}
          maxLength={15}
          validationRules={{
            lowercase: true,
            uppercase: true,
            number: true,
            specialChars: true,
            length: { max: 4, min: 2 },
          }}
        />

        <Input type='password' help='test' placeholder='this is my placeholder' />
        <Input
          help='this is my help message'
          type={InputType.TEXT}
          status={InputStatus.WARNING}
          iconNameRight={IconName.SEARCH}
          placeholder='This is my placeholder'
        />
      </main>
    </div>
  )
}
