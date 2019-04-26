const express = require('express');
const http = require('http');
const path = require('path');

const api = require('./server/routes/api');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/expressApp')));


app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/expressApp/index.html'));
  });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));