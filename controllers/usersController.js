"use strict";

var postJson = require("post-data"),
    users = require("../lib/users"),
    url = require("url");


module.exports = {
    getUsers: function (request, response, next) {
        try {
            var result = users.getUsers();
        } catch (e) {
            next(null);
        }
    },
    postUsers: function(request, response, next){
        /* next(null) */
            response.statusCode = 200;
            try{
                var testUsr = postJson(request.body, JSON.parse,  function(e) {
                    if (error) throw error;
                });
                next();
            }catch(e){
                next(e);
            }
        }
};