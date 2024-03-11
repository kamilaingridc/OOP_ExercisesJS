class BankAccount {
    constructor(type) {
      this.balance = 0;
      this.type = type;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        alert(`Withdrawal of ${amount} successful.`);
      } else {
        alert("Insufficient balance to withdraw.");
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        alert(`Deposit of ${amount} successful.`);
      } else {
        alert("Invalid deposit amount.");
      }
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor() {
      super("checking");
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor() {
      super("savings");
    }
  
    applyInterest(rate) {
      const interest = this.balance * (rate / 100);
      this.balance += interest;
      alert(`Interest of ${interest.toFixed(2)} applied. Current balance: ${this.balance.toFixed(2)}`);
    }
  }
  
  const CheckingAccount1 = new CheckingAccount();
  const mySaves = new SavingsAccount();
  
  CheckingAccount1.deposit(prompt("Write how many do u wanna deposit: "));
  CheckingAccount1.withdraw(200);
  
  mySaves.deposit(500);
  mySaves.applyInterest(0.5);
  