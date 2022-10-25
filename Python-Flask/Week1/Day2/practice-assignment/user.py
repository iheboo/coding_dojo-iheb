


class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
        self.account_balance += amount	# the specific user's account increases by the amount of the value received
        return self
    def make_withdrawl(self,amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print (f'User:{self.name},balnace:${self.account_balance}')
        return self
    def transfer_money(self,other_user,amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        self.display_user_balance()
        other_user.display_user_balance()
        return self



# 3 instances of the User class

iheb=User("iheb","h.ljs@yoo.f")

heni=User("heni","heni@hf.f")

ali=User("ali","ali@hdh.f")



# user make 3 deposits and 1 withdrawal and then display their balance

iheb.make_deposit(50).make_deposit(500).make_deposit(500).make_withdrawl(200).display_user_balance()
# iheb.make_deposit(500)
# iheb.make_deposit(500)
# iheb.make_withdrawl(200)
# iheb.display_user_balance()

heni.make_deposit(70).make_deposit(400).make_deposit(500).make_withdrawl(300).display_user_balance()
# heni.make_deposit(400)
# heni.make_deposit(500)
# heni.make_withdrawl(300)
# heni.display_user_balance()

ali.make_deposit(100).make_withdrawl(10).make_withdrawl(30).make_withdrawl(35).display_user_balance()
# ali.make_withdrawl(10)
# ali.make_withdrawl(30)
# ali.make_withdrawl(35)
# ali.display_user_balance()

iheb.transfer_money(ali,90)









      
