//writing the schema

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});

//creating the collection name
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;