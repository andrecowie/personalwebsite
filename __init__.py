import boto3, json, datetime
from flask import Flask, url_for, redirect, session, render_template, request, Response
from passlib.hash import sha256_crypt
from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute, BooleanAttribute

app = Flask(__name__)



@app.route('/')
def home():
	blogposts= [{'title': 'Floods in Auckland', 'subtitle': 'How long till we are underwater?', 'img': '/static/img/tamaki_drive.jpg'}]
	return render_template("index.html", datetime=datetime, blog = blogposts)


@app.route('/cv')
def visualisations():
	return render_template("cv.html")

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
