const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const mongoose = require('./db/mongoose');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const register = require('./controllers/register');


const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send(silence) })//done
app.post('/signin', signin.handleSignin(bcrypt))//done
app.post('/register', (req, res) => { register.handleRegister(req, res, bcrypt) })//done
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res) })//in progress
app.put('/image', (req, res) => { image.handleImage(req, res) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(3000, () => {
  console.log('app is running on port 3000');
})
