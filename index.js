const http = require('http');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes');
const morgan = require('morgan');

const db = require('./db');

dotenv.config();

// create app
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use('/', routes);
app.use((req, res, next) => {
  return res.status(404).json('404 - Not found');
});

db.connect(process.env.MONGO_URI);

// create server
const server = http.createServer(app);

server.on('error', (err) => {
  console.error(err);
});
server.on('listening', () => {
  console.log('Listening...');
});

server.listen(process.env.PORT);

process.on('SIGINT', () => {
  console.log('Closing server...');
  server.close(() => {
    console.log('Http server closed.');
  });
});
