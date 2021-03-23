import express from 'express';
import { config } from 'dotenv';
import { urlencoded, json } from 'body-parser';
import { mainRouter } from './routes/main';

config();

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use(mainRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
