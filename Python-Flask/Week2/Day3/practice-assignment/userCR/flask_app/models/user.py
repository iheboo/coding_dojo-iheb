from flask_app.config.mysqlconnection import connectToMySQL

class User:
    db_name='usercr'
    def __init__(self,data):
        self.id = data['id_users']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(first_name)s , %(last_name)s , %(email)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        return connectToMySQL(User.db_name).query_db( query, data )
    
    @classmethod
    def disp_all(cls) :
        query="SELECT * FROM users"
        all_users=  connectToMySQL(User.db_name).query_db(query)
        USERS = []
        # Iterate over the db results and create instances of friends with cls.
        for user in all_users:
            USERS.append( cls(user) )
        
        return USERS


    # @classmethod
    # def get_one(cls,data):
    #     query  = "SELECT * FROM users WHERE id = %(id)s;"
    #     result = connectToMySQL(User.db_name).query_db(query,data)
    #     return cls(result[0])
    
    # @classmethod
    # def update(cls,data):
    #     query = "UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,updated_at=NOW() WHERE id = %(id)s;"
    #     return connectToMySQL(User.db_name).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL(User.db_name).query_db(query,data)

