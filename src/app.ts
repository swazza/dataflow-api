import express = require("express");

const app = express();
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
