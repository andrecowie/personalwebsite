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

@app.route('/personal', methods=['POST'])
def personal():
	print (request.json['answer'])
	return "Success"


@app.route('/whatHereFor', methods=['POST'])
def whosAndreToRandom():
	print (request.json['answer'])
	return "Success"

app.secret_key = "eworuq859r"

if __name__ == "__main__":
	app.run()
