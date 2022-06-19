import Chat from 'routes/Chat/Chat';
import ChatRoom from 'routes/ChatRoom/ChatRoom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Chat />} />
          {/* <Route index element={<ChatRoom />} /> */}
          <Route path='chatRoom/:userId' element={<ChatRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
