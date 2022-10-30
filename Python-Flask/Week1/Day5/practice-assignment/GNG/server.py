import string
from flask import Flask,render_template,session,redirect,request
import random 
app=Flask(__name__)
app.secret_key="jjjfttty"


@app.route('/')
def toto():
        if "num" not in session:
           session['num'] = random.randint(1,100)
        return render_template('index.html')

@app.route('/game',methods=['POST'])
def tot():
    session['game'] = int(request.form['game'])
    return redirect('/')


@app.route('/claer')
def claer():
    session.claer()
    return redirect('/')




if __name__=="__main__":
    app.run(debug=True)