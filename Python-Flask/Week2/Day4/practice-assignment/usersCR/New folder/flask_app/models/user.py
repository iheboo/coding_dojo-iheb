from flask_app.config.mysqlconnection import  connectToMySQL

class User:
    def __init__(self,data):
         self.id = data['id']
         self.first_name = data['first_name']
         self.last_name = data['last_name']
         self.email = data['email']
         self.created_at = data['created_at']
         self.updated_at = data['updated_at']
         return self



    # @classmethod
    # def get_all(cls):
    #     query = "SELECT * FROM users;"
    #     results = connectToMySQL('flask').query_db(query)
    #     users = []
    #     # Iterate over the db results and create instances of friends with cls.
    #     for user in users:
    #         users.append( cls(user) )
    #     return users

