import winston = require("winston");
import assert = require("assert");

let logger: winston.Logger;

function createLogger(level: string, transport: string) {
  logger = winston.createLogger({
    level: level,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
  });

  return logger;
}

export function init() {
  const level = process.env.LOG_LEVEL as string,
    transport = process.env.LOG_TRANSPORT as string;

  logger = createLogger(level, transport);
}

export function getLogger(): winston.Logger {
  assert(
    logger !== undefined,
    "It appears that the logger has not been initialised. Please ensure that the `init()` function is invoked before any usage of the logger"
  );

  return logger;
}
