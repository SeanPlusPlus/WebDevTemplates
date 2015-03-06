# API

### Install the required libraries

```
virtualenv venv
. venv/bin/activate
pip install -r requirements.txt
```

### Open a python interpreter

```
python
```

### Using the python interpreter create db and add data

```
>>> from app import db, Tag
>>> db.create_all()
>>> t = Tag('my first tag')
>>> db.session.add(t)
>>> db.session.commit()
>>> exit()
```

### Run the server

```
python app.py
```

### Check out your sweet API:

```
curl http://localost:5000/
curl -X POST -H "Content-Type: application/json" -d '{"name": "my second tag"}' http://localhost:5000/tags
curl http://localhost:5000/tags
```

