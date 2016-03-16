"use strict";

var http = require("http"),
    url = require("url"),
    routes = require("./routes");

function requestHandler(request, response) {

    var parsedUrl = url.parse(request.url, true),
        method = request.method.toLowerCase();
}