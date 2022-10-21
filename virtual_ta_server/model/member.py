from urllib import request
from flask import Flask
from chat import *
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.get("/sendAnswer/<question>")
def member(question):
    print(question)
    # s = '{"hello": "laugh"}'
    response = message(question)
    print(response)
    return {"answer": response}





if __name__ == "__main__":
    app.run(debug=True, host = "localhost", port = 8080)