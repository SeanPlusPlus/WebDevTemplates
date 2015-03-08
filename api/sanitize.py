def tag(req, tags):
    data = {}
    if not req:
        data['error'] = {'message': 'pass json', 'code': 400}
        return data
    if 'name' not in req:
        data['error'] = {'message': 'name required', 'code': 400}
        return data
    return req
