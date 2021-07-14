import React, { createContext, useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Wash car"
    }
  ]);

  const addTodo = (newTodo) => {
    const todoId = todos.length + 1;
    const newTodos = [...todos, { id: todoId, name: newTodo }];
    setTodos(newTodos);
  };

  const store = {
    todos,
    addTodo
  };

  return (
    <TodosContext.Provider value={store}>{children}</TodosContext.Provider>
  );
};
