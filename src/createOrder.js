const helpers = require('./helpers')

async function createOrder(data) {
  await helpers.checkUserBalance(data.user_id, data.amounttttttttt);
  return true;
}

module.exports = {
  createOrder
}
