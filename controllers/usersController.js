"use strict";

var postJson = require("post-json");
var users = require("../lib/users");

/*
var url = "http://my-post-url.net/path"
var body = {my: "test", data: "fun"}

postJson(url, body, function (err, result) {
    // do stuff
}) */


module.exports = {
    getUsers: function (request, response, next) {
        var result = users.getUsers();
        next(null);
    },
    postUsers: function(request, response, next){
        /* next(null) */
        setTimeout(function(next){
            response.statusCode = 200;
            try{
                response.write(renderer.render('hello.ect', {
                    message: "Hello world"
                }));
                next();
            }catch(e){
                next(e);
            }
        }, 500, next)
    },
};