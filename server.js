const express = require('express');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

server.listen(4000);

const chat = [];
const sockets = [];

//* 웹소켓 연결 시
io.on('connection', (socket) => {
  console.log(socket.id, 'conneted!');
  //* 연결 종료 시
  sockets.push(socket);
  socket.on('disconnect', () => {
    console.log('클라이언트 접속 해제', io, socket.id);
    clearInterval(socket.interval);
  });

  socket.on('init', (payload) => {
    console.log(payload);
  });

  //* 에러 시
  socket.on('error', (error) => {
    console.error(error);
  });

  //* 클라이언트로부터 메시지 수신
  socket.on('reply', (data) => {
    // reply라는 이벤트로 송신오면 메세지가 data인수에 담김
    const [text, userId] = data;
    chat.push({ id: socket.id, msg: text, userId });

    sockets.forEach((s) => {
      s.emit('news', chat); // news라는 이벤트로 문자열을 포함하여 송신
    });
  });

  //* 클라이언트로 메세지 송신
});
