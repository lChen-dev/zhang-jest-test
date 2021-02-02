const { checkUserBalance } = require('../src/helpers');

describe('Testing checkUserBalance', () => {

  it('Should throw error if balance is 0', () => {
    expect(() => checkUserBalance(123, 0)).toThrow('Insufficient funds')
  })

  it('Should throw error if balance is < 0', () => {
    expect(() => checkUserBalance(123, -10)).toThrow('Insufficient funds')
  })

  it('Should NOT throw error ib balance is > 0', () => {
    expect(() => checkUserBalance(123, 456)).not.toThrow('Insufficient funds')
  })
})
