from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome to the Home Page of the API. Please look around at the different routes'

@app.route('/authenticate')
def authenticate():
    return 'Authing'

if __name__ == '__main__':
    app.run()