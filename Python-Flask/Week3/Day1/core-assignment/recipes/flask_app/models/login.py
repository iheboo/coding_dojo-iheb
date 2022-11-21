from flask_app.config.mysqlconnection import connectToMySQL
from flask import Flask
from flask_app import app
from flask_bcrypt import Bcrypt        
import re 
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
bcrypt = Bcrypt(app) 

class User:
    db_name=''
    def __init__(self,data) :
        self.idlogin = data['idlogin']
        self.first_name = data['first_name']
        self.last_name= data['last_name']
        self.email = data['email']
        self.password = data ['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    # Create
    @classmethod
    def create_dog(cls,data) :
        query= "INSERT INTO dogs (first_name,last_name,email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s) ;"
        result = connectToMySQL(cls.db_name).query_db(query,data)
        print(result)
        return result


    # @classmethod
    # def get_all_dogs(cls):
    #     query="SELECT * FROM dogs;"
    #     result = connectToMySQL(cls.db_name).query_db(query)
    #     all_from_db=[]
    #     for one in result:
    #         all_from_db.append(cls(one))
    #     return all_from_db
        
    @staticmethod
    def validate_user( user ):
        is_valid = True
        # test whether a field matches the pattern
        if not EMAIL_REGEX.match(user['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name,last_name,email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"
        return connectToMySQL("validation").query_db(query, data)
    
    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("validation").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])
    
    @staticmethod
    def validate_burger(burger):
        is_valid = True # we assume this is true
        if len(burger['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if len(burger['bun']) < 3:
            flash("Bun must be at least 3 characters.")
            is_valid = False
        if int(burger['calories']) < 200:
            flash("Calories must be 200 or greater.")
            is_valid = False
        if len(burger['meat']) < 3:
            flash("Bun must be at least 3 characters.")
            is_valid = False
        return is_valid