import { Handler } from "express";
import morgan = require("morgan");
import assert = require("assert");
import logger = require("../../aspects/logging");

export function getRequestLogger(): Handler {
  assert(
    process.env.LOG_HTTP_REQ_FORMAT,
    "LOG_HTTP_REQ_FORMAT env var is not set to a valid value"
  );

  return morgan(process.env.LOG_HTTP_REQ_FORMAT, {
    stream: {
      write: (text: string) => {
        logger.getLogger().info(text);
      },
    },
  });
}
