const cors = require("cors");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();

// 모든 출처에서의 요청을 허용
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// HTTP 서버 생성
const server = http.createServer(app);

// 웹소켓 서버 생성 및 구성
const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  console.log("클라이언트가 연결되었습니다.");

  ws.on("message", function incoming(message) {
    console.log("받은 메시지:", message);
    ws.send("서버에서 클라이언트로 메시지를 보냅니다.");
  });
});

// 서버 리스닝 시작
server.listen(8080, "0.0.0.0", function () {
  console.log("서버가 포트 8080에서 실행중입니다.");
});
