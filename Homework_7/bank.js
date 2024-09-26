class BankAccount {
  #balance;
  #transactionHistory;

  constructor() {
    this.#balance = 0;
    this.#transactionHistory = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#transactionHistory.push({ type: "DEPOSIT", amount });
      console.log(
        `На счёт внесено: $${amount}. Текущий баланс: $${this.#balance}`
      );
    } else {
      console.log("Сумма депозита должна быть положительной.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      this.#transactionHistory.push({ type: "WITHDRAW", amount });
      console.log(
        `Со счёта снято: $${amount}. Текущий баланс: $${this.#balance}`
      );
    } else if (amount > 0 && this.#balance < amount) {
      console.log("Недостаточно средств на счёте.");
    } else {
      console.log("Сумма снятия должна быть положительной.");
    }
  }

  getBalance() {
    return this.#balance;
  }

  audit() {
    console.log("История транзакций:");
    this.#transactionHistory.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.type}: $${transaction.amount}`);
    });
  }
}

const myAccount = new BankAccount();

myAccount.deposit(1000);
myAccount.withdraw(300);
console.log(`Текущий баланс: $${myAccount.getBalance()}`);
myAccount.audit();
