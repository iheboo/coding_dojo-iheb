from flask import Flask,render_template,redirect,session,request
app=Flask(__name__)
app.secret_key="fdgfgfgfgfs"

@app.route('/')
def route():
    return render_template('home.html')

@app.route('/admin', methods=["POST"])
def reslt():
        session['name'] = request.form.get['Name']
        session['location'] = request.form.get('location')
        session['language'] = request.form.get('language')
        session['comments'] = request.form.get('comments')
        return redirect('/reslt')

@app.route('/reslt' )
def route():
    return render_template('reslt.html')

if __name__==('__main__'):
   app.run(debug=True)