import './App.css';
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList';
import { TodosProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <Header/>
        <TodoList/>
      </TodosProvider>
    </div>
  );
}

export default App;
