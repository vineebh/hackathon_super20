from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# mysql://username:password@hostname/database
# mysql://root:@localhost/test

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/')
def index():
    return "Welcome to the Flask Login API!"

# Route for handling login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    emailID = data.get('emailID')
    password = data.get('password')

    sql = text('SELECT * FROM login WHERE UserName=:username AND EmailID=:emailID AND Password=:password')
    with db.engine.connect() as connection:
        result = connection.execute(sql, {'username': username, 'emailID': emailID, 'password': password}).fetchone()

    if result:
        session['logged_in'] = True
        session['username'] = username
        return jsonify({"message": "Login successful", "status": "success"}), 200
    else:
        return jsonify({"message": "Invalid credentials", "status": "failure"}), 401

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    emailID = data.get('emailID')
    password = data.get('password')

    # Check if the user already exists
    sql = text('SELECT * FROM login WHERE UserName=:username OR EmailID=:emailID')
    with db.engine.connect() as connection:
        result = connection.execute(sql, {'username': username, 'emailID': emailID}).fetchone()

    if result:
        return jsonify({'message': 'User already exists!'}), 400
    else:
        sql = text('INSERT INTO login (UserName, EmailID, Password) VALUES (:username, :emailID, :password)')
        db.engine.execute(sql, username=username, emailID=emailID, password=password)
        return jsonify({'message': 'New login created successfully!'}), 201

@app.route('/logout')
def logout():
    session.clear()  # Clear session data
    return jsonify({'message': 'Logged out successfully!'}), 200

if __name__ == '__main__':
    app.run(debug=True)