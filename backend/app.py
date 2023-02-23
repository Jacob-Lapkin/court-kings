from flask import Flask, jsonify, request


app = Flask(__name__)

app.config['SECRET_KEY'] = 'changethislater'


@app.route('/', methods=["GET"])
def home():
    return jsonify(message='welcome to court kings'), 200


if __name__ == "__main__":
    app.run(debug=True)