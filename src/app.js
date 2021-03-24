import express from 'express';
import { config } from 'dotenv';
import { urlencoded, json } from 'body-parser';
import { mainRouter } from './routes/main';

// makes enviroment variables available
config();

const app = express();

// middleware setup
app.use(urlencoded({ extended: false }));
app.use(json());

// routes setup
app.use(mainRouter);

// Initialise the server on the provided port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
