import express = require("express");
import bootstrap = require("./bootstrap");
import middleware = require("./middleware");

bootstrap.init();
const app = express();
middleware.init(app);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello!");
});

app.listen(process.env.HTTP_PORT, () => {
  console.log(`App listening on port ${process.env.HTTP_PORT}`);
});
