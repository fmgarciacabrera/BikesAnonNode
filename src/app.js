import express from 'express';
// import * as mongoose from "mongoose";
const mongoose = require('mongoose');
import { config } from 'dotenv';
import { urlencoded, json } from 'body-parser';
import { mainRouter } from './routes/main';

// makes environment variables available
config();

const app = express();

// middleware setup
app.use(urlencoded({ extended: false }));
app.use(json());

// routes setup
app.use(mainRouter);

// Initialise the server on the provided port
const port = process.env.PORT || 8000;
const dbUri = process.env.DB_URI;

mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Database successfully connected.');
    app.listen(port, () => {
      console.log(`App listening on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('The connection with the database could not be established.'));

