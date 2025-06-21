const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

io.on("connection", socket => {
  socket.on("stream", data => {
    socket.broadcast.emit("stream", data);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
