import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { SocketService } from "./services/sockets/SocketService";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Authorization",
      "X-API-KEY",
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Access-Control-Allow-Request-Method",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
new SocketService(io);

const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
