import mongoose from "mongoose";

import { DB_URI } from "./secrets";

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

export const dbConnect = () => {
  mongoose
    .connect(DB_URI, dbOptions)
    .then(() => {
      console.log("Database successfully connected.");
    })
    .catch(() => {
      console.log("The connection with the database could not be established.")
    })
};
