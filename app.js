const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
app.use(express.json());
app.use(bodyParser.json({ limit: '500mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(cors());


// configuration file here you can add configuration
const Dbauth = require('./public/configuration/configuration');


// Author


const Author = require('./public/controller/author/author-controller')

app.get('/v1/api/Getallauthor', Author.GetallAuthor)

app.get('/v1/api/getauthorbyId/:id', Author.GetauthorbyId)

app.post('/v1/api/addAuthor', Author.AddAuthor)

app.put('/v1/api/updateauthors', Author.updateAuthor)

// Book

const Book = require('./public/controller/Book/bookcontroller')

app.get('/v1/api/GetallBook', Book.GetallBook)

app.get('/v1/api/getBookbyId/:id', Book.GetBookbyId)

app.post('/v1/api/addBook', Book.AddBook)

app.put('/v1/api/updatebooks', Book.updateBooks)

const port = process.env.PORT || 3000;

let server = http.createServer(app)

server.listen(port, Dbauth.DbConnect())