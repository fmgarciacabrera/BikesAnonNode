import express from "express";

export const getTestableApi = (baseUrl, router) => {
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(baseUrl, router);

  return app;
};
