const express = require('express')
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
    console.log(path.join('>>>>', publicPath, 'index.html'))
 });
 const PORT = process.env.PORT || 3001

 app.listen(PORT, () => {
     console.log(`listening on port ${PORT} ...`)
 })