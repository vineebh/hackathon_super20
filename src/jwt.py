from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Dummy user data for demonstration purposes
users = {
    "user1": generate_password_hash("password1"),
    "user2": generate_password_hash("password2")
}

@app.route('/')
def home():
    return "Welcome to the Flask Login API!"

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and check_password_hash(users[username], password):
        token = jwt.encode({'username': username, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({"message": "Login successful", "token": token}), 200
    else:
        return jsonify({"message": "Invalid credentials", "status": "failure"}), 401

if __name__ == '__main__':
    app.run(debug=True)
