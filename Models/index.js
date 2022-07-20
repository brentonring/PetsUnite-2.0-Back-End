require('dotenv').config();
const mongoose = require('mongoose');

//DATABASE
const mongooseURI = process.env.MONGO_URI;

mongoose.connect(mongooseURI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo: ', mongooseURI)}
)

//exporting all the databases
module.exports.Adoption = require('./adoption');
module.exports.Event = require('./event');
module.exports.Service = require('./service');
module.exports.User = require('./user');
module.exports.AdoptComment = require('./adopt_comment');
module.exports.EventComment = require('./event_comment');
module.exports.ServiceComment = require('./service_comment');