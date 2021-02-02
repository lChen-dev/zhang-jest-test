const { checkUserBalance } = require('./helpers')

async function createOrder(data) {
  await checkUserBalance(data.user_id, data.amounttttttttt);
  return true;
}

module.exports = {
  createOrder
}
