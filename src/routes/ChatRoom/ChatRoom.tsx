import { useChat } from 'hooks/useChat';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const { userId = '' } = useParams();

  const { newMessage, sendMessage } = useChat();
  const [text, setText] = useState('');

  const handleChangeInput = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmitMessage = (e: any) => {
    e.preventDefault();
    sendMessage(text, userId);
    setText('');
  };

  return (
    <div>
      <form>
        <input type='text' placeholder='Enter message' value={text} onChange={handleChangeInput} />
        <button type='submit' onSubmit={handleSubmitMessage} onClick={handleSubmitMessage}>
          Send
        </button>
      </form>
      {newMessage.map(({ id, msg, userId: user }, i) => {
        const indexValue = i;
        return (
          <div key={`${id}${indexValue}`}>
            <ChatMessage msg={msg} user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default ChatRoom;
