import express from "express";

import { mainRouter } from "./routes/main";
import { PORT } from "./config/secrets";
import { dbConnect } from "./config/database";

const app = express();

// middleware setup
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes setup
app.use(mainRouter);

// database connection
dbConnect();

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
