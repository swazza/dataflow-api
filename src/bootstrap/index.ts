import assert = require("assert");
import dotenv = require("dotenv");
import logger = require("../aspects/logging");

function validateEnvVars(): void {
  const { HTTP_PORT = "" } = process.env;
  const httpPort = parseInt(HTTP_PORT as string);
  assert(
    Number.isInteger(httpPort),
    "A valid value for the EnvVar HTTP_PORT has not been provided."
  );

  const {
    LOG_LEVEL = "",
    LOG_TRANSPORT = "",
    LOG_HTTP_REQ_FORMAT = "",
  } = process.env;

  assert(LOG_LEVEL, "Invalide Log Level");
  assert(LOG_TRANSPORT, "Invalid Log Transport");
  assert(LOG_HTTP_REQ_FORMAT, "Invalid Request Log Format");
}

export function init(): void {
  // Loads all values present in a .env file into process.env
  dotenv.config();
  validateEnvVars();

  logger.init();
}
