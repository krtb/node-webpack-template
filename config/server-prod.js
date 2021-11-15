const express = require('express');
const path = require('path')
const https = require('https');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); 
// server port number
const PORT = 3000;

// allows for support of static files, like images/CSS/svg/etc.
// info on configuration can be found here => https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static(path.join(__dirname, 'index.html')))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`, '\n'));