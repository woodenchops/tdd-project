import React, {useContext} from 'react'
import { TodosContext } from "../../contexts/TodoContext";

function Header() {
  const { todos } = useContext(TodosContext);
  return (
    <div data-testid="header">
      <h2>Header</h2>
      <span data-testid="todolength">{todos.length}</span>
    </div>
  )
}

export default Header
