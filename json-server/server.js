const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; //You can use any port number here; i choose to use 3001

server.use(middlewares);
server.use(router);
server.listen(port);
