def tag(req, tags):
    data = {}
    if not req:
        data['error'] = {'message': 'pass json', 'code': 400}
        return data
    if 'name' not in req:
        data['error'] = {'message': 'name required', 'code': 400}
        return data 
    if isinstance(req['name'], basestring) == False:
        data['error'] = {'message': 'name must be string', 'code': 400}
        return data 
    if len(req['name']) == 0:
        data['error'] = {'message': 'name must be greater than zero length', 'code': 400}
        return data 
    return req
