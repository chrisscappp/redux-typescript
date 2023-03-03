import './App.css';
import UsersList from './components/UsersList'
import TodosList from './components/Todos'
import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
        <UsersList/>
        <hr/>
        <TodosList/>
        <hr/>
        <Posts/>
    </div>
  );
}

export default App;
