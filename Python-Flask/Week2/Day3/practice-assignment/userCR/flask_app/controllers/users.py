from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import User


@app.route('/user/new')
def index():
    return  render_template("index.html")

@app.route('/user/new', methods=['Post'] )
def index2():
    print(request.form)
    # data = {
    #     "first_name": request.form["first_name"],
    #     "last_name" : request.form["last_name"],
    #     "email" : request.form["email"]
    # }
    # print(data)
    User.save(request.form)

    return  redirect('/user')

@app.route('/user')
def show():
    
    return  render_template('display.html', user_all=User.disp_all() )

@app.route('/logout')
def ret():

    return  redirect('/user/new')

# @app.route('/deelt/<int:id>')
# def oow(id):
#     data = {
#         'id':id,
#     }
#     User.destroy(data)
#     return  redirect('/user')
# @app.route('/showo/<int:id>')
# def edit(id):
#     data ={ 
#         "id":id
#     }
#     return render_template("show.html",user=User.get_one(data))

@app.route('/delete/<int:user_id>')
def delete(user_id):
    data = {
        'id': user_id,
    }
    print('------------------------------------------------------')
    User.destroy(data)
    return redirect('/user')
