import React from 'react'

function SingleTodo({todo}) {

  const result = todo?.name ? todo.name : 'No result'
  return (
    <div data-testid="singleTodo">
      <>
        <li>{result}</li>
      </>
    </div>
  )
}

export default SingleTodo
