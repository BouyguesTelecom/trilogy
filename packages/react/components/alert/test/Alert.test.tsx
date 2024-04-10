import React from 'react'
import {fireEvent, render} from '@testing-library/react'
import {Alert} from '../index'
import {AlertProps} from '../AlertProps'
import {AlertState} from '../../../objects/facets/Alert'
import {IconName} from '../../icon'
import renderer from 'react-test-renderer'

describe('Alert', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Alert
        testId={'alert'}
        display
        alert={AlertState.INFO}
        title='Alert information'
        description='Lorem Ipsum is simply dummy text of the printing and type..'
      />,
    )
    const alert = getByTestId('alert')
    expect(alert).toBeInTheDocument()
  })

  it('should have the right className', () => {
    const { getByTestId } = render(
      <Alert
        testId={'alert'}
        display
        alert={AlertState.INFO}
        title='Alert information'
        description='Lorem Ipsum is simply dummy text of the printing and type..'
      />,
    )

    const alert = getByTestId('alert')
    expect(alert).toHaveClass('alert')
  })

  test('should render with correct props and className based on AlertState', () => {
    const props: AlertProps = {
      testId: 'alert',
      display: true,
      alert: AlertState.INFO,
      title: 'Alert information',
      description: 'Lorem Ipsum is simply dummy text of the printing and type..',
      iconName: IconName.EYE_SLASH,
    }
    const { getByTestId } = render(<Alert {...props} />)
    const alert = getByTestId('alert')
    expect(alert).toHaveClass('is-info')
  })

  test('snapshot', () => {
    const tree = renderer
      .create(
        <Alert
          testId={'alert'}
          display={true}
          alert={AlertState.INFO}
          title='Alert information'
          description='Lorem Ipsum is simply dummy text of the printing and type..'
          iconName={IconName.TIMES}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should have iconClassName with right icon', () => {
    const { getByTestId } = render(
      <Alert testId={'alert'} display alert={AlertState.INFO} iconClassname='testIconClassName' iconName={IconName.BELL} />,
    )
    const alert = getByTestId('alert')
    expect(alert.firstChild).toHaveClass('testIconClassName')
    expect(alert.firstChild?.firstChild).toHaveClass('tri-bell')
  })

  it('should have icon SUCCESS icon', () => {
    const { getByTestId } = render(<Alert testId={'alert'} display alert={AlertState.SUCCESS} />)
    const alert = getByTestId('alert')
    expect(alert.firstChild?.firstChild).toHaveClass(IconName.CHECK_CIRCLE)
  })

  it('should have icon WARNING icon', () => {
    const { getByTestId } = render(<Alert testId={'alert'} display alert={AlertState.WARNING} />)
    const alert = getByTestId('alert')
    expect(alert.firstChild?.firstChild).toHaveClass(IconName.ALERT)
  })

  it('should have icon INFO icon', () => {
    const { getByTestId } = render(<Alert testId={'alert'} display alert={AlertState.INFO} />)
    const alert = getByTestId('alert')
    expect(alert.firstChild?.firstChild).toHaveClass(IconName.INFOS_CIRCLE)
  })

  it('should have icon ERROR icon', () => {
    const { getByTestId } = render(<Alert testId={'alert'} display alert={AlertState.ERROR} />)
    const alert = getByTestId('alert')
    expect(alert.firstChild?.firstChild).toHaveClass(IconName.EXCLAMATION_CIRCLE)
  })

  it('should have icon default icon', () => {
    const { getByTestId } = render(<Alert testId={'alert'} display />)
    const alert = getByTestId('alert')
    expect(alert.firstChild?.firstChild).toHaveClass(IconName.INFOS_CIRCLE)
  })

  it('should execute onClick fn', () => {
    let isClick = false
    const { getByTestId } = render(<Alert testId={'alert'} display onClick={() => (isClick = true)} />)
    const alert = getByTestId('alert')
    fireEvent.click(alert)
    expect(isClick).toBe(true)
  })

  it('should return div', () => {
    const { container } = render(<Alert testId={'alert'} />)
    const divElm = container.querySelector('div')
    expect(divElm).toBeInTheDocument()
  })
})
