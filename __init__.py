import boto3
import json
from flask import Flask, url_for, redirect, session, render_template, request, Response, send_from_directory
from passlib.hash import sha256_crypt
from pynamodb.models import Model
from pynamodb.attributes import UnicodeAttribute, NumberAttribute, BooleanAttribute

app = Flask(__name__)

@app.route('/')
def home():
	return render_template("index.html")

@app.route('/charts')
def chart():
	return render_template('charts.html')

app.secret_key = "eworuq859r"

if __name__ == "__main__":
	app.run()
