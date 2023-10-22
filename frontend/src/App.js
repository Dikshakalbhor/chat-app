import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './templates/Homepage';
import ChatPage from './templates/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
