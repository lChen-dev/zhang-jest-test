function checkUserBalance(user_id, amount) {
  if (amount <= 0) {
    throw new Error('Insufficient funds');
  }
  return true;
}

module.exports = {
  checkUserBalance
}
