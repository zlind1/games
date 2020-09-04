import boto3, uuid

db = boto3.client('dynamodb')

class User:
    tableName = 'ZLGames-users'
    def __init__(self, user_id, username, password):
        self.user_id = user_id
        self.username = username
        self.password = password
    def update(self):
        return db.update_item(TableName='ZLGames-users', Item={
            'user_id': {'S': self.user_id},
            'username': {'S': self.username},
            'password': {'S': self.password}
        })
    @staticmethod
    def scan():
        return db.scan(TableName=User.tableName)
    @staticmethod
    def get(user_id):
        user = db.get_item(TableName=User.tableName, Key={
            'user_id': {'S': user_id}
        })['Item']
        return User(user_id, user['username']['S'], user['password']['S'])
    @staticmethod
    def delete(user_id):
        return db.delete_item(TableName=User.tableName, Key={
            'user_id': {'S': user_id}
        })
    @staticmethod
    def new(username, password):
        return db.put_item(TableName=User.tableName, Item={
            'user_id': {'S': str(uuid.uuid4())},
            'username': {'S': username},
            'password': {'S': password}
        })
