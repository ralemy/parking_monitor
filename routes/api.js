/**
 * Created by ralemy on 9/11/16.
 * Restful api to provide access to data objects
 */

var express = require('express');
var router = express.Router();

router.get("/streets",function(req,res){
    req.db.getStreets()
        .then(streets=>res.json(streets))
        .catch(error=>res.status(400).send(error));
});
module.exports=router;