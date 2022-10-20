const http = require("http");
const url = require("url");

//Create server
const server = http.createServer((req, res) => {
  const pathName = req.url;
  switch (pathName) {
    case "/overview":
      res.end("This is overview");
      break;
    case "/product":
      res.end("This is product");
      break;
    default:
      res.writeHead(404, {
        'Content-type': 'text/html'
      });
      res.end("<h1>Page not found</h1>");
      break;
  }
});

server.listen(8000, "127.0.0.1", () => console.log("Listening on port 8000")); //Launch server and listen port
