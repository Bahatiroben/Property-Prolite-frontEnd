const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
// const index = path.join(publicPath, 'index.html')
app.get('*', (req, res) => {
    res.sendFile(__dirname, 'build', 'index.html');
    console.log(path.join('>>>>', __dirname))
 });
 const PORT = process.env.PORT || 3001

 app.listen(PORT, () => {
     console.log(`listening on port ${PORT} ...`)
 })