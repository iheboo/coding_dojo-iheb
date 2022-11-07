from flask import render_template,request,redirect
from flask_app import app
from flask_app.models.dojo import Dojos 



@app.route('/')
def index():
    return redirect('/dojo')


@app.route('/dojo',methods=['GET','POST'])
def users():
    if request.method == 'POST':
        Dojos.save(request.form)
        return redirect('/dojo')
    else:
        dojos=Dojos.get_all()
    return render_template("index.html",dojos=dojos)


@app.route('/dojos')
def show_dojo(id):
    data = {
        "id": id
    }
    return render_template('index_two.html', dojos=Dojos.get_one(data))