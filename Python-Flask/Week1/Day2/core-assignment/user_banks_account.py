class BankAccount:
    accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yeild_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()


savings = BankAccount(.05,1000)
checking = BankAccount(.02,5000)

savings.deposit(10).deposit(20).deposit(40).withdraw(600).yeild_interest().display_account_info()
checking.deposit(100).deposit(200).deposit(400).withdraw(60).yeild_interest().display_account_info()

BankAccount.print_all_accounts()



class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = {
            " savings" : BankAccount(.05,1000),
            "checking" : BankAccount(.02,5000)
        } 
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account += amount	# the specific user's account increases by the amount of the value received
        
        return self
    def make_withdrawl(self,amount):
        self.account -= amount
        return self
    def display_user_balance(self):
        print (f'User:{self.name},savings:{self.savings}')
        print (f'User:{self.name},checking:{self.checking}')
        return self
    def transfer_money(self,other_user,amount):
        self.account-= amount
        other_user.account += amount
        self.display_user_balance()
        other_user.display_user_balance()
        return self


iheb=User("iheb")
iheb.account ['savings'] .deposit(100)
iheb.display_user_balance()



