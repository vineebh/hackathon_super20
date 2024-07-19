from flask import Flask, request, jsonify, session


app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'

# Dummy user data for demonstration purposes
users = {
    "user1": "password1",
    "user2": "password2"
}

@app.route('/')
def index():
    return "Welcome to the Flask Login API!"

# Route for handling login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users and users[username] == password:
        session['logged_in'] = True
        session['username'] = username
        return jsonify({"message": "Login successful", "status": "success"}), 200
    else:
        return jsonify({"message": "Invalid credentials", "status": "failure"}), 401


@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if username in users:
        return jsonify({'message': 'User already exists!'}), 400

    users[username] = password
    return jsonify({'message': 'Registered successfully!'})

@app.route('/logout')
def logout():
    session.clear()  # Clear session data
    return jsonify({'message': 'Logged out successfully!'}),100


if __name__ == '__main__':
    app.run(debug=True)
