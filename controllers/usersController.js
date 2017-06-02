"use strict";
//
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
           // need for check if response exist with status "200"
        response.statusCode = 200;
        // after checking need check what response consist of
        // then upload content if existing
        // then check if content is an object
        // then check if object is not empty
        // after all checking work with object
            try{
                var testUsr = postJson(request.body, JSON.parse,  function(e) {
                    if (error) throw error;
                });
                if (testUsr) exports.testUsr = testUsr;
                next();
            }catch(e){
                next(e);
            }
        }
};
