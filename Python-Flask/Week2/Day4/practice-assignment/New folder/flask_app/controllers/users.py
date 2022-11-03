# from flask_app import app
# from flask import render_template

# @app.route('/')
# def index():
#     return render_template('index.html')
from flask_app import app
from flask import render_template
# from user import user

@app.route('/')
def index():
    return  render_template("index.html")