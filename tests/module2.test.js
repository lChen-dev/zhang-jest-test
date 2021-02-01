const module_1_mock = jest.mock('../src/module1', () => ({
  fn1: jest.fn(() => {
    return 'I am mocked result of f1'
  })
}));

const module2 = require('../src/module2');

describe('Testing module2.main', () => {

  it('Should return value from module_1_mock.fn1', () => {
    const result = module2.main();
    expect(result).toEqual('I am mocked result of f1')

    // how to get how many times function module1.fn1 was called?????

    // I cannot get value like module_1_mock.fn1

    // or module_1_mock.mock.fn1

    // everything is undefined

    expect(module_1_mock.fn1).toEqual(undefined);
    expect(module_1_mock.mock.fn1).toEqual(undefined);
  })

})
