class BankAccount :
    
    accounts=[]
    def __init__(self, int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def make_deposit(self, amount):
        self.balance += amount
        return self 

    def make_withdrawl(self,amount):
        if (self.balance-amount) >= 0:
            self.balance -= amount
        else:
            print ("insufficentfunds funds:Charging a $5 fee")
            self.balance -=  5
        return self

    def display_account_info(self):
        self.balance += 100
        print(f" balance: {self.balance}")
        return self
    def yield_interest(self):
        if( self.balance)>0:
            self.int_rate-= (self.balance* self.int_rate)
        return self
    @classmethod
    def print_all_accounts(cls):
    
          for  account in cls.accounts:
             account. display_account_info()

cache =BankAccount (0.5,5000)
chak =BankAccount(0.7,750000)

cache .make_deposit(100).make_deposit(10).make_deposit(10).make_withdrawl(10).yield_interest().display_account_info()
chak .make_deposit(100).make_deposit(100).make_withdrawl(5).make_withdrawl(10).make_withdrawl(20).make_withdrawl(20).yield_interest().display_account_info()

BankAccount.print_all_accounts()
