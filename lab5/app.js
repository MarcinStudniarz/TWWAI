const express = require('express');
const config = require('./config').config; // dodając tę linię, trzeba pamiętać o stworzeniu pliku config.js
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (request, response) => {
   response.render(__dirname + '/index.html', {przedmiot: 'Technologie webowe w aplikacjach Internetu'})
})

app.listen(config.port, function () {
   console.info(`Server is running at port 3000`);
});

