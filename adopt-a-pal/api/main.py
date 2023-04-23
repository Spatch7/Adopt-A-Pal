import datetime
import os
import json
from google.cloud import datastore
from flask import Flask, jsonify, make_response, render_template, request, Response


# app = Flask(__name__)
app = Flask(__name__, static_folder='./build', static_url_path='/')
client = datastore.Client()


ANIMALS = "animals"

@app.route('/')
def root():
    # return render_template('index.html')
    return app.send_static_file('index.html')

@app.route("/api/endpoint", methods=["GET"])
def endpoint():
    resp = make_response({"cat": 15})
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp

@app.route('/api/hello')
def hello():
    return jsonify(message='Hello World!')

@app.route('/api/animals', methods=["GET", "POST"])
def animals():
    if request.method == "GET":
        query = client.query(kind=ANIMALS)

        species = request.args.get("species")
        breed = request.args.get("breed")
        disposition_animals = request.args.get("disposition_animals")
        disposition_children = request.args.get("disposition_children")
        disposition_leash = request.args.get("disposition_leash")

        if species:
            query.add_filter("Species", "=", species)

        if breed:
            query.add_filter("Breed", "=", breed)

        if disposition_animals:
            if disposition_animals.lower() == "true":
                query.add_filter("disposition", "=", "Good with other animals")

        if disposition_children:
            if disposition_children.lower() == "true":
                query.add_filter("disposition", "=", "Good with children")

        if disposition_leash:
                if disposition_leash.lower() == "true":
                    query.add_filter("disposition", "=", "Animal must be leashed at all times")

        results = list(query.fetch())

        for e in results:
            e["id"] = e.key.id
        return Response(json.dumps(results, default=str), status=200,
                        mimetype='application/json')
    elif request.method == "POST":
        return jsonify(message='post')
    else:
        return jsonify(message='405')



if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host='0.0.0.0', port=port)
    # app.run(host='127.0.0.1', port=5000, debug=True)