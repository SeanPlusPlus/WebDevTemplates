def tags(tags):
    t = []
    for tag in tags:
        t.append({'name': tag.name, 'id': tag.id})
    return t
