import assert = require("assert");
import dotenv = require("dotenv");

/*
    Loads all values present in a .env file into process.env
*/
dotenv.config();

export interface EnvVars {
  httpPort: Number;
}

export function getEnvVars(): EnvVars {
  const { HTTP_PORT = "" } = process.env;
  const httpPort = parseInt(HTTP_PORT as string);

  assert(
    Number.isInteger(httpPort),
    "A valid value for the EnvVar HTTP_PORT has not been provided."
  );

  return {
    httpPort,
  };
}
