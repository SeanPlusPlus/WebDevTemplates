#!/usr/bin/env python
import pycurl
from StringIO import StringIO
import json

# make sure to:
# 
# pip install pycurl
# 
# we are not including pycurl in the requirements.txt file because
# this script is an example of a standalone client that another user
# would use to access your api (just like the curl commands
# in the readme file, but in a full-blow python script instead).

def main():
    buffer = StringIO()
    c = pycurl.Curl()
    c.setopt(c.URL, 'http://localhost:5000/tags')
    c.setopt(c.WRITEDATA, buffer)
    c.perform()
    c.close()

    body = buffer.getvalue()
    data = json.loads(body)
    print data

if __name__ == '__main__':
    main()
