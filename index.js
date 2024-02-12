const express = require("express");
const app = express();
const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  res.json({ message: "HELLO I AM FROM BACKEND..........." });
});

app.listen(PORT, () => {
  console.log("server is listening on port number: ${PORT}.....");
});
