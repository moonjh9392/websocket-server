const WebSocket = require("ws");
const cors = require("cors");
const express = require("express");
const app = express();

// 모든 출처에서의 요청을 허용
app.use(cors());

const server = app.listen(8080);

const wss = new WebSocket.Server({
  server,
});

wss.on("connection", function connection(ws) {
  console.log("클라이언트가 연결되었습니다.");

  ws.on("message", function incoming(message) {
    console.log("받은 메시지:", message);
  });

  ws.send("서버에서 클라이언트로 메시지를 보냅니다.");
});

console.log("웹소켓 서버가 포트 8080에서 실행중입니다.");
