#!/usr/bin/env python
import pycurl
import cStringIO
import json
import random

# make sure to:
# 
# pip install pycurl
# 
# we are not including pycurl in the requirements.txt file because
# this script is an example of a standalone client that another user
# would use to access your api (just like the curl commands
# in the readme file, but in a full-blow python script instead).
# running this script will post an example tag, and will also get
# a list of all current tags. make sure you setup the app first tho.


###############################################################################
def generateRandomTag():
###############################################################################

    word_file = "/usr/share/dict/words"
    WORDS = open(word_file).read().splitlines()
    return WORDS[ random.randint(0, len(WORDS)) ]


###############################################################################
def post():
###############################################################################

    # initialize 
    api = 'http://localhost:5000/tags'
    data = json.dumps({"name": generateRandomTag()})

    # run 
    c = pycurl.Curl()
    c.setopt(pycurl.URL, api)
    c.setopt(pycurl.HTTPHEADER, ['Content-Type: application/json'])
    c.setopt(pycurl.POST, 1)
    c.setopt(pycurl.POSTFIELDS, data)
    c.perform()
    c.close()


###############################################################################
def get():
###############################################################################

    # initialize
    api = 'http://localhost:5000/tags'
    buf = cStringIO.StringIO()

    # run 
    c = pycurl.Curl()
    c.setopt(c.URL, api)
    c.setopt(c.WRITEFUNCTION, buf.write)
    c.perform()

    # display
    data = json.loads(buf.getvalue())
    buf.close()
    print data


###############################################################################
def main():
###############################################################################

    print '\n*** POST ***\n'
    post()

    print '\n*** GET ***\n'
    get()


###############################################################################
if __name__ == '__main__':
    main()
###############################################################################
