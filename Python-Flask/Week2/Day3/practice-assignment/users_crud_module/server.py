# from distutils.log import debug
# from pickle import TRUE
from flask_app import app
from flask_app.controllers import users_cont


if __name__=="__main__":
    app.run(debug=True)