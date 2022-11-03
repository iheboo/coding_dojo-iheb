from flask_app.models.user import User
from flask import render_template,request,redirect
from flask_app import app 

@app.route('/user/new')
def index():
    return render_template("index.html")


@app.route('/user/new', methods=['Post'])
def form ():
    data= {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
    }

    User.save(data)
    return redirect ('/user')

@app.route('/user')
def use ():
    tab = User.disp_all()
   
    return render_template("display.html",tab=tab)

@app.route('/newe')
def newee ():
    return redirect ('/user/new')

