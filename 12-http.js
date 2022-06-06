const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Wekcome to our home page.");
    res.end();
  } else if (req.url === "/about") {
    res.write("Here is our short history.");
    res.end();
  } else {
    res.write(`
      <h1>Ooops!</h1>
      <p>We can't seem to find the page that you're looking for.</p>
      <a href="/">back home</a>
      `);
    res.end();
  }
});

server.listen(5000);
