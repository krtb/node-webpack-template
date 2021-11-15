import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.dev.config'
const dotenv = require('dotenv');
dotenv.config();

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})


// const app = express(); 
// TODO: figure out why IMG Path is not appearing
// FIXME: https://webpack.js.org/loaders/css-loader/#recommend
// server port number
// const PORT = 3000;
// Set Node Environmnet Variable
// let environment = process.env.NODE_ENV
// TODO: FIGURE OUT IF THIS CAN BE DELETED
// let isDevelopment = environment === 'development'

// if (isDevelopment) {
//   console.log(environment, 'environment var')
//   console.log(isDevelopment, 'isDevelopment')
//   setUpMoreVerboseLogging()
// }

// allows for support of static files, like images/CSS/svg/etc.
// info on configuration can be found here => https://expressjs.com/en/starter/static-files.html
// app.use('/static', express.static(path.join(__dirname, 'index.html')))

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`, '\n'));

