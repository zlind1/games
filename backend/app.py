from flask import Flask, request
from data import User

app = Flask(__name__)

@app.route('/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        return User.scan()
    if request.method == 'POST':
        return User.new(request.json['username'], request.json['password'])

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
