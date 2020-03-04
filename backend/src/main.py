# coding=utf-8

from flask_cors import CORS
from flask import Flask, request, jsonify
import tools
# creating the Flask application
app = Flask(__name__)
#Enable Cross Origin Resource Sharing
CORS(app)
#GET /devices pour retourner liste des devices
@app.route('/devices')
def get_devices():
    devices = tools.getDevices()
    #print(tools.ObjetToJson(devices))
    return jsonify(devices)


if __name__ == "__main__":
    app.run(debug=True)