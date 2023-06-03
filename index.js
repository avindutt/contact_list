const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();//now this app variable has all the functionalities of express that are rquired to run the server.

app.set('view engine', 'ejs'); //told the express that we're using ejs template.
app.set('views', path.join(__dirname, 'views'));//setting the view path. __dirname corresponds to the directory from which server was initially started. It is typically in the form of a path. So doing this will search for views folder inside the directory path.
app.use(express.urlencoded());//app.use is a middleware(this reads only the form data and not the params.) Here urlencoded() is a parser which parse the data coming from browser( in encoded from) and convert in into json object.
app.use(express.static('assets'));//this will look up for an assets folder(which contains styles, css etc) in the directory.


// middleware 1
// app.use(function(req, res, next){ //here next argument calls the next middleware if it is there.
//     console.log('middleware 1 called');
//     next();
// })

// middleware 2
// app.use(function(res, req, next){
//     console.log('middleware 2 called');
//     next();
// })

var contactList = [
    {
        name: "Avin",
        phone: "8909180808"
    },
    {
        name: "Tony",
        phone: "1234567890"
    },
    {
        name: "Chitransh",
        phone: "1111111111"
    }
]

app.get('/', function(req, res){
  
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        return res.render('home', {
            title: "Contact List",
            contact_list: contacts
        });
        
    });

});

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with Ejs"
    });
});

app.post('/create-contact', function(req, res){
   // console.log(req.body);
//    contactList.push({
//     name: req.body.name,
//     phone: req.body.phone
//    });

 //  contactList.push(req.body);

 Contact.create({
    name: req.body.name,
    phone: req.body.phone
 }, function(err, newContact){
    if(err){console.log('error in creating a contact!');
    return;}

    console.log('********', newContact);
    return res.redirect('back');
 });

 //  return res.redirect('/');
});

// app.get('/delete-contact/:phone', (req, res) => {
//     console.log(req.params);
//     let phone = req.params.phone;
// });
//this was the way to set params.

app.get('/delete-contact/:id', function(req, res){
    //get id from query in the url
    let id = req.params.id;

    //find the contact in the database using id and delete it
    Contact.findByIdAndDelete(id, function(err){
        if(err){
        console.log('error in deleting an object from database');
        return;
    }

    return res.redirect('back');

    });

    
    // let phone = req.query.phone;

    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    // if(contactIndex != -1){ //this means contact has been found
    //     contactList.splice(contactIndex, 1);     
    // }
    //     return res.redirect('back');  
    });


app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }
    console.log('Yup! My Express server is running on Port:', port);
});
