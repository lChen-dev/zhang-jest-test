const { checkUserBalance } = require('../src/helpers');

describe('Testing checkUserBalance', () => {

  it('Should throw error if balance is 0', () => {
    expect(() => checkUserBalance(123, 0)).toThrow('Insufficient funds')
  })

  it('Should throw error if balance is < 0', () => {
    expect(() => checkUserBalance(123, -10)).toThrow('Insufficient funds')
  })

  it('Should throw error if balance is not passed', () => {
    expect(() => checkUserBalance(123)).toThrow('Amount is required')
  })

  it('Should throw error if balance is not passed', () => {
    expect(() => checkUserBalance()).toThrow('User id is required')
  })

  it('Should NOT throw error ib balance is > 0', () => {
    expect(() => checkUserBalance(123, 456)).not.toThrow('Insufficient funds')
  })
})
