from flask_app.config.mysqlconnection import  connectToMySQL

class User:
    db_name='usercr'
    def __init__(self,data):
         self.id = data['id']
         self.first_name = data['first_name']
         self.last_name = data['last_name']
         self.email = data['email']
         self.created_at = data['created_at']
         self.updated_at = data['updated_at']
         return self

    @classmethod
    def save(cls,data):
        query="INSERT INTO Users(first_name,last_name,email,created_at,updated_at) VALEUS(%(first_name)s ,%(last_name)s,%(email)s,NOW(),NOW());"
        return connectToMySQL(User.db_name).query_db(query,data)

    @classmethod
    def disp_all(cls):
        query="SELCET * FROM users;"
        results = connectToMySQL(User.db_name).query_db(query)
        USS = []
        for user in results:
            USS.append(cls(user))
        return USS
