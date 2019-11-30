const express = require('express');
let jwt = require('jsonwebtoken');
let config = require('./config');
const bodyParser = require('body-parser');

class HandlerGenerator{
    login(req,res){
        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'harika';
        let mockedPassword = 'attainU';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
              let token = jwt.sign({username: username},
                config.secret,
                { expiresIn: '24h' // expires in 24 hours
                }
              );
// return the JWT token for the future API calls
res.json({
    success: true,
    message: 'Authentication successful!',
    token: token
  });
            }
            else { res.status(403);
                res.json({
                  success: false,
                  message: 'Incorrect username or password'
                });
              }

        }
        else {res.status(401);
            res.json({
              success: false,
              message: 'Authentication failed! Please check the request'
            });
          }
    }
    index (req, res) {
        res.json({
          success: true,
          message: 'Index page'
        });
      }
}


function main () {
    let app = express(); 
    let handlers = new HandlerGenerator();
    app.use(bodyParser.urlencoded({ // Middleware
      extended: true
    }));
    app.use(bodyParser.json());
    // Routes & Handlers
    app.post('/login', handlers.login);
    app.get('/', handlers.index);
    app.listen(3000);
  }
  
  main();