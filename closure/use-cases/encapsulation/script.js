function createAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Balance:", balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log("Balance:", balance);
    },
  };
}

const account = createAccount(1000);

account.deposit(500);
account.withdraw(200);
