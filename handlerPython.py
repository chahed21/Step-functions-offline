import json


def hello(event, context):
    body = {
        "message": "Python runtime works",
        "input": event,
    }

    return {"statusCode": 200, "body": json.dumps(body)}