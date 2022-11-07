from flask_app.config.mysqlconnection import connectToMySQL

class Ninjas:
    db_name='dojos_ninja'
    def __init__(self, data):
        self.ninja_id = data['ninja_id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def sav(cls, data):
        query = "INSERT INTO ninjas (ninja_id,dojos_id,first_name,last_name,age) VALUES (%(ninja_id)s,%(dojos_id)s,%(first_name)s,%(last_name)s,%(age)s);"

        # comes back as the new row id
        result = connectToMySQL(cls).query_db(query,data)
        return result
    