const express = require("express");
const router_work = require("./router/work");

const app = express();

app.use("/work", router_work);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
