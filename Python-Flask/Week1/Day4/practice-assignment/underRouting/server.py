from re import X
import string
from unicodedata import name
from flask import Flask

app=Flask(__name__)

@app.route('/')
def hi_code ():
    return 'hi!'


@app.route('/dojo')
def dojo():
    return'dojo'

@app.route('/say/<name>') 
def say_name (name):
    
    return f" hi {name} !"


@app.route('/repeat/<int:num>/<string:word>')
def reapet_word(num,word):     
    return f'{num*word}'

    






















if __name__ == "__main__":
    app.run(debug=True)

