const ChatMessage = ({ user, msg }: { user: string; msg: string }) => {
  return (
    <div>
      <div>{user}</div>
      <div>{msg}</div>
    </div>
  );
};

export default ChatMessage;
