import { useState } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [userId, setUserId] = useState('');

  const handleInputUserId = (e: any) => {
    const { value } = e.target;
    setUserId(value);
  };

  return (
    <div>
      <input type='text' placeholder='Enter user id' value={userId} onChange={handleInputUserId} />
      <Link to={`./chatRoom/${userId}`}>
        <button type='submit' onSubmit={handleInputUserId}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default Chat;
