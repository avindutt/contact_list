Types of requests:-
GET: it is used to simply fetch the data from server.
POST: used to fetch data after some changes in the Database.
PUT: it is used to fill the incomplete information.
PATCH: it is used to change the already filled information.
DELETE: delete the data.
last 3 requests are used only with AJAX.


Procedure followed:-
1) install ejs (template engine) to send data from controller to the 'views' and make the website dynamic.
2) app.set- a) view engine
            b) view path
3) views directory and files created
4) response render           



Procedure followed after Expressjs:-
1. index.js
2. npm init (for package.json)
3. npm install express
started our server by importing express library, setting the port, told app to listen to the server
4.sending data from server to ejs file
5. npm install ejs
 told express to se ejs for the view engine
 set the path of views
6. created home.ejs
7. created route(/) and controller(the callback function)
8. created the middleware for the POST system to read the request and change it into keys and values.
9. form + post request
10. adding static files of html css js.



Middleware:- It is a function which reads the data from the form input and puts into the request body. There can be multiple middlewares. Middlewares can also override each other. They can also add and update request, response keys and values.





SUMMARY

1. Express
2. Routes and Controllers
3. EJS
4.HTTP Requests -> GET, POST
5 Database - a. MongoDB
             b. Mongoose
             c. Robo 3T (for visualising)