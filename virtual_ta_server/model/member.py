from flask import Flask
from chat import *
app = Flask(__name__)
i = 5
@app.route("/members")
def member():
    return message("hello")


if __name__ == "__main__":
    app.run(debug=True)