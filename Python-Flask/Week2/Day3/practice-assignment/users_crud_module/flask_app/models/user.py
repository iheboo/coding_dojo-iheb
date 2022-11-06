from flask_app.config.mysqlconnection import MySQLConnection
# burger.py
class User:

    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#Create User

    @classmethod
    def save(cls,data):
        query="INSERT INTO users (first_name,last_name,email,created_at,updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,NOW() ,NOW())"
        return MySQLConnection ('userscr').query_db(query,data)

#Read User DATA

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        users_from_db = MySQLConnection('userscr').query_db(query)
        user = []
        for b in users_from_db:
            user.append(cls(b))
        return user

#Update User

    @classmethod
    def fix(cls,data):
        print("-------------------------------",data)
        query = "UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,updated_at=NOW() WHERE id = %(id)s;"
        return MySQLConnection('userscr').query_db(query,data)

#delete User

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM users WHERE id = %(id)s;"
        return MySQLConnection('userscr').query_db(query,data)

#get One User

    @classmethod
    def oneUser(cls,data):
        query  = "SELECT * FROM users WHERE id = %(id)s;" 
        result = MySQLConnection('userscr').query_db(query,data)
        return cls(result[0])
