from flask import Flask,render_template,redirect,session
app=Flask(__name__)
app.secret_key='jjdkjndk'
@app.route('/')
def rute():
   if "adds" not in session:
      session["adds"]=0
   else :
      session['adds']+=1
   return render_template('index.html')
@app.route('/reset')
def reset():
   session.clear()
   return redirect('/')
if __name__=="__main__":
    app.run(debug=True)