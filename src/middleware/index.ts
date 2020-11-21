import express = require("express");
import logger = require("./logging");

/*
 *   Takes an express app and registers middlewares to it.
 */
export function init(app: express.Application) {
  app.use(logger.getRequestLogger());
}
