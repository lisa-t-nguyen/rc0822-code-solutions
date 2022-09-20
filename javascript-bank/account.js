/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transObject = new Transaction('deposit', amount);
    this.transactions.push(transObject);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawalObject = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawalObject);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (!this.transactions.length) {
    return 0;
  } else if (this.transactions.length > 0) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        balance -= this.transactions[i].amount;
      }
    }
  }
  return balance;
};
