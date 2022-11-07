from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninjas

class Dojos:
    db_name='dojos_ninja'
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas =[]

    


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(cls.db_name).query_db(query)
        users = []
        for x in results:
            users.append( cls(x) )
        return users

    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"

        # comes back as the new row id
        result = connectToMySQL(cls.db_name).query_db(query,data)
        return result

    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        result = connectToMySQL(cls.db_name).query_db(query,data)
        dojoss = cls(result[0])
        for row in result:
            n = {
                'id': row['ninja.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'age': row['age'],
                'created_at': row['ninjas.created_at'],
                'updated_at': row['ninjas.updated_at']
            }
            dojoss.ninjas.append( Ninjas(n) )
        return  dojoss 
