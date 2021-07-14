import React, {useState, useContext} from 'react'
import { TodosContext } from "../../contexts/TodoContext";
import SingleTodo from "../SingleTodo/SingleTodo";

function TodoList() {

  const { todos, addTodo } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState("");
  const [notification, setNotification] = useState({
    message: ''
  })

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!newTodo) {
      setNotification({message: 'No value'})
      return;
    } else {
      setNotification({message: ''})
    }

    addTodo(newTodo);
    setNewTodo("");
  };


  return (
    <div data-testid="todoList">

      {notification?.message}
      <form data-testid="form" onSubmit={(e) => handleSubmit(e)}>

        <ul>
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => <SingleTodo key={todo.id} todo={todo} />)}
        </ul>

        <label htmlFor="todoInput">Add Todo</label>
        <input
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          value={newTodo}
          placeholder="add todo"
          id="todoInput"
        />




      </form>


    </div>
  )
}

export default TodoList
