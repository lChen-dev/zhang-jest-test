function checkUserBalance(user_id, amount) {
  if (typeof user_id === 'undefined') throw new Error('User id is required');
  if (typeof amount === 'undefined') throw new Error('Amount is required');

  if (amount <= 0) {
    throw new Error('Insufficient funds');
  }
  return true;
}

module.exports = {
  checkUserBalance
}
