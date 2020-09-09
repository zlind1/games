from flask import Flask, request
from flask_cors import CORS
from data import User

app = Flask(__name__)
CORS(app)

@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        if request.args:
            return User.scan(username=request.args['username'])
        return User.scan()
    if request.method == 'POST':
        return User.new(request.json['username'], request.json['password'])

@app.route('/users/login', methods=['POST'])
def login():
    success, error = False, ''
    username = request.json.get('username')
    password = request.json.get('password')
    if not username or not password:
        error = 'Missing required parameters'
    scan = User.scan(username=request.json['username'])
    if scan['Count'] == 0:
        error = 'Username not found'
    else:
        user = scan['Items'][0]
        if user['password']['S'] == request.json['password']:
            success = True
        else:
            error = 'Incorrect password'
    return {'success': success, 'error': error}

@app.route('/users/signup', methods=['POST'])
def signup():
    success, error = False, ''
    scan = User.scan(username=request.json['username'])
    if scan['Count'] == 0:
        User.new(request.json['username'], request.json['password'])
    else:
        error = 'Username taken'
    return {'success': success, 'error': error}


@app.route('/users/<user_id>', methods=['GET', 'PUT', 'DELETE'])
def user(user_id):
    if request.method == 'GET':
        return User.get(user_id)
    if request.method == 'PUT':
        user = User.get(user_id)
        user.username = request.json['username']
        user.password = request.json['password']
        return user.update()
    if request.method == 'DELETE':
        return User.delete(user_id)

if __name__ == '__main__':
    app.run(debug=True)
