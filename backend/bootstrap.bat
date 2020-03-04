#!/bin/bash

set FLASK_APP=./src/main.py
python3 source $(pipenv --venv)/bin/activate
flask run -h 0.0.0.0