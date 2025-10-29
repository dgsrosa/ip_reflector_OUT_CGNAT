const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send(ip);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`IP Reflector rodando na porta ${port}`);
});
