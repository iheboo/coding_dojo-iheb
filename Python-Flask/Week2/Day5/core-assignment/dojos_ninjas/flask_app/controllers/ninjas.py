from flask import render_template,request,redirect
from flask_app import app
from flask_app.models.ninja import Ninjas

# @app.route('/new_ninja')
# def new_ninjas():
#     return render_template("index_one.html")

@app.route('/new_ninja',methods=['GET','POST'])
def new_ninjas():
    if request.method == 'POST':
        Ninjas.sav(request.form)
        return redirect('/new_ninja')
    else:
        ninjas=Ninjas.get_all()
    return render_template("index_one.html",ninjas=ninjas)

@app.route('/ninjas',methods=['POST'])
def create():
    print(request.form)
    Ninjas.sav(request.form)
    return redirect('/new_ninja')