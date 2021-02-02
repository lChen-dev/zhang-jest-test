const { createOrder }  = require('../src/createOrder');
const helpers = require('../src/helpers');

describe('Testing createOrder', () => {

  it('Should create order successfully', async () => {
    // mock checkUserBalance
    jest.spyOn(helpers, 'checkUserBalance').mockImplementation(() => true);

    const result = await createOrder({
      user_id: 123,
      amount: -10
    })
    expect(result).toEqual(true)
  })

  it('Should NOT create order successfully', async () => {
    // mock checkUserBalance
    jest.spyOn(helpers, 'checkUserBalance').mockImplementation(
      () => Promise.reject(new Error('Insufficient funds'))
    );

    try {
      const result = await createOrder({
        user_id: 123,
        amount: -10
      })
    } catch(err) {
      expect(err.message).toEqual('Insufficient funds')
    }
  })
})
