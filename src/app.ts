import express = require("express");
import bootstrap = require("./bootstrap");

const envVars = bootstrap.getEnvVars();
const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello!");
});

app.listen(envVars.httpPort, () => {
  console.log(`App listening on port ${envVars.httpPort}`);
});
