const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const server = express();

server.listen(5050, function() {
  console.log("Server is Running");
});

// Express configuration

server.set("view engine", "njk");
server.use(routes);
server.use("/public", express.static("public"));

// Nunjucks configuration

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
});
