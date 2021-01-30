# Hangman

Simple hangman game implemented with Flask.
Based on the original Victor Lopez's [Hangman](https://github.com/vlopezferrando/hangman).

# Installation

## Option 1: Ubuntu packages

    sudo apt-get install python-flask python-flask-sqlalchemy

## Option 2: pip

[Install pip](https://pip.pypa.io/en/stable/installing/), then:

    pip install Flask Flask-SQLAlchemy

# Run

    python hangman.py

Create dabase with:

    python -c 'from hangman import db; db.create_all()'

# Links
* Flask: http://flask.pocoo.org
* Jinja2: http://jinja.pocoo.org/docs/dev/
* Bootstrap: http://getbootstrap.com
* JQuery: https://jquery.com
