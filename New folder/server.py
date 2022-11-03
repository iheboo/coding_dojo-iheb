from flask import Flask,render_template,redirect,request,session
app = Flask (__name__)
app.secret_key = "yes"
@app.route('/')
def route():
    return render_template ('index.html')

@app.route('/rset', methods=['POST'])
def rset():
    session['fname']=request.form['fname']
    session['lname']=request.form['lname']
    session['email']=request.form['email']
    print(session)
    return redirect('/display')

@app.route('/lot')
def deel():
    session.clear()
    return redirect('/')

@app.route('/display')
def display():
    return render_template('display.html')














if __name__=='__main__':
   app.run(debug=True)