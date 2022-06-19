import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// const SOCKET_SERVER_URL = `${window.location.protocol}//${window.location.hostname}:4000`;
const SOCKET_SERVER_URL = 'https://4349-2001-2d8-e208-62c8-4d0b-ffcf-186-bcfa.jp.ngrok.io';

// const SOCKET_SERVER_URL = `http://localhost:4000`;

export const useChat = () => {
  const [newMessage, setNewMessage] = useState<{ id: string; msg: string; userId: string }[]>([]);
  const [socket, _] = useState(io(SOCKET_SERVER_URL));

  useEffect((): any => {
    socket.on('connect', () => {
      console.log(socket.id);
    });
    socket.on('news', (data: any) => {
      console.log(data);
      setNewMessage(data);
    });
    return () => {
      socket.on('disconnect', () => {
        console.log(socket.connected); // false
      });
    };
  }, [socket]);

  // socket.connect;
  // 서버로부터 메세지 수신
  const sendMessage = (text: string, userId: string) => {
    // 서버에게 메세지 송신
    socket.emit('reply', [text, userId]);
  };

  return { newMessage, sendMessage };
};
