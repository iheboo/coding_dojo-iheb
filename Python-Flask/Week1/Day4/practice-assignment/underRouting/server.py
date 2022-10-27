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


@app.route('/ reapet/<name>/word')
def reapet_word(name,word):
    X =''
    for i in range (0,name):
        X += f"<h2>{word}</h2>"
     
    return X

    






















if __name__ == "__main__":
    app.run(debug=True)

