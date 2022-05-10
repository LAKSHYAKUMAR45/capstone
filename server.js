//-------------------------- Authentication --------------------------------------------------

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  const flash = require('express-flash')
  const session = require('express-session')
  const methodOverride = require('method-override')
  
  const initializePassport = require('./passport-config')
  initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
  )
  
  const users = []
  
  app.set('view-engine', 'ejs')
  app.use(express.urlencoded({ extended: false }))
  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))
  
  app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.user.name, temp: temprature, hum: humidity, press: pressure})
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/settings',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })

  app.get('/settings', checkAuthenticated, (req, res) => {
    res.render('settings.ejs')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
  })
  
  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
  
  app.listen(3000);
//------------------------------------ Open Weather API -------------------------------------

let request = require('request');

let apiKey = '5aaf45c3611c6f7c2dee540a13b1efc1';
let city = 'Delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    var data = JSON.parse(body);
    global.temprature =  data.main.temp;
    global.humidity = data.main.humidity;
    global.pressure = data.main.pressure;
    console.log("open weather working");
  }
});

//------------------------------------ Getting the user data -------------------------------------------
//------------------------------------Random forest classifier -----------------------------------------

app.post("/result", async function(req,res){
  global.testData ={
    N: Number(req.body.N),
    P: Number(req.body.P),
    K: Number(req.body.K),
    temp: Number(req.body.temprature),
    hum: Number(req.body.humidity),
    pH: Number(req.body.pH),
    rain: Number(req.body.rainfall)
  };

  var url = "http://127.0.0.1:5000/flask"

  request({url:url, qs:testData}, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); 
        global.recommendedCrop = body;
        console.log(recommendedCrop);
      });     
      res.redirect("/")
      
      });


//-------------------------------Connecting to Firebase -----------------------------------------------

var firebase = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCGkAefRUTEP7GWCb-lZoBZVbMnCbjqK00",
  authDomain: "farmbuddy-d4fbd.firebaseapp.com",
  databaseURL: "https://farmbuddy-d4fbd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "farmbuddy-d4fbd",
  storageBucket: "farmbuddy-d4fbd.appspot.com",
  messagingSenderId: "853236971949",
  appId: "1:853236971949:web:70ca38c65366a5e91f8924",
  measurementId: "G-CL2KY8F2D4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


//----------------------------------------------------------------------------------------------------

