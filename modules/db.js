/**
 * Created by ralemy on 9/11/16.
 * This file wraps the db functionality of the application, in this case to be
 * implemented using sqlite3
 */
"use strict";
const sqlite3 = require("sqlite3").verbose(),
    q = require("q");

let db = null;


module.exports = {
    init:function(name){
        db = new sqlite3.Database(name || "db.sqlite");
        return this;
    },
    close:function(){
        db.close();
        return this;
    },
    findUser:function(name){
        let defer = q.defer();
        db.get("Select * from users where name like ? ", name || "", defer.makeNodeResolver());
        return defer.promise.then((user)=>user || q.reject("User Not Found"));
    },
    getStreets:function(){
        let defer = q.defer();
        db.all("Select * from streets", defer.makeNodeResolver());
        return defer.promise;
    }
};
