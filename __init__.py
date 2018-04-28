import boto3
import json
from flask import Flask, url_for, redirect, session, render_template, request, Response
from passlib.hash import sha256_crypt
from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute, BooleanAttribute

app = Flask(__name__)

@app.route('/')
def home():
	return render_template("index.html")


@app.route('/visualisations')
def visualisations():
	return render_template("visualisations.html")

@app.route('/gallery')
def gallery():
	return render_template("gallery.html")

@app.route('/posts')
def posts():
	return render_template("posts.html")

@app.route('/purchase/coffee', methods=['POST', 'GET'])
def ijustboughtacoffee():
	if request.method == 'POST':
		print(request.form)
		return "Enjoy your coffee"
	elif request.method == 'GET':
		return render_template("coffee.html")

@app.route('/whatHereFor', methods=['POST'])
def whosAndreToRandom():
	print (request.json['answer'])
	return "Success"

app.secret_key = "eworuq859r"

if __name__ == "__main__":
	app.run(debug=True)
