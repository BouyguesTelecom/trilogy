import { checkCents } from '../PriceHelpers'

describe('Price', () => {
  it('returns "00" when passed an empty string', async () => {
    const result = await checkCents('')
    expect(result).toBe('00')
  })

  it('adds a "0" to the end of a string with length of 1', async () => {
    const result = await checkCents('5')
    expect(result).toBe('50')
  })

  it('returns the same string if it has length greater than 1', async () => {
    const result = await checkCents('50')
    expect(result).toBe('50')
  })
})
