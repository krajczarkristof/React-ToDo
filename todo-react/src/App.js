import './App.css';
import { Provider } from "react-redux";
import { store } from "./actions/store";
import {Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  return (
    <Provider store={store}>
      <Container className="bg-transparent  text-black">
        <header>
          <h1 className="text-center">Todo List </h1>
        </header>
        <TodoForm/>
        <TodoList/>
    </Container>
   </Provider>
  );
}

export default App;
