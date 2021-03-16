require("dotenv").config();
var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    chalk = require('chalk'),
    cookieParser = require('cookie-parser'),    
    helmet = require('helmet'),
    compress = require('compression'),
    config = require('../config/config'),
    bodyParser = require('body-parser'),
    ApiRoutes = require('./routes');
  
// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'
import Template from './../template'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'
//end


//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()

//comment out before building for production
devBundle.compile(app)

// Normal express config middlewares
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))
app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "https://formfrontend.netlify.app"
      ],
      credentials: true,
    })
  );


// Custom api routes
app.use('/', ApiRoutes);

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  const markup = ReactDOMServer.renderToString(
    sheets.collect(
          <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
              <MainRouter />
            </ThemeProvider>
          </StaticRouter>
        )
    )
    if (context.url) {
      return res.redirect(303, context.url)
    }
    const css = sheets.toString()
    res.status(200).send(Template({
      markup: markup,
      css: css
    }))
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})


/** connect to MongoDB datastore */
mongoose.connect( config.DB.uri, config.DB.options)
    .then(()=>{
        console.log(chalk.green.bold('Server successfully connected with MongoDB!'));
        app.listen(config.PORT, function(){
            console.log('Listening on port ' + config.PORT);
            mongoose.set('debug', config.DB.debug);
        });
    })