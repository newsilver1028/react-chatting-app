import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = `http://localhost:4000`;

export const useChat = () => {
  const [newMessage, setNewMessage] = useState<{ id: string; msg: string; userId: string }[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [socket, _] = useState(io(SOCKET_SERVER_URL));

  useEffect((): any => {
    socket.on('connect', () => {});
    socket.on('news', (data: any) => {
      setNewMessage(data);
    });
    return () => {
      socket.on('disconnect', () => {});
    };
  }, [socket]);

  const sendMessage = (text: string, userId: string) => {
    // 서버에게 메세지 송신
    socket.emit('reply', [text, userId]);
  };

  return { newMessage, sendMessage };
};
