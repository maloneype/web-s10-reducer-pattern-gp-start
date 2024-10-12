import React from "react";
import styled from "styled-components";

const StyledTodo = styled.li`
  text-decoration: ${(pr) => (pr.$complete ? "line-through" : "initial")};
  cursor: pointer;
`;

export default function Todo({
  todos,
  toggleTodo,
  toggleShowCompletedTodos,
  showCompleted,
}) {
  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {todos.map((todo) => (
              (todo.complete && !showCompleted) ? null :
              <StyledTodo
                $complete={todo.complete}
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
              >
                  <span>
                    {todo.label}
                    {todo.complete && " ✔️"}
                  </span>
              </StyledTodo>
            )
        )}
      </ul>
      <button onClick={toggleShowCompletedTodos}>
        {showCompleted ? "Hide" : "Show"} completed todos
      </button>
    </div>
  );
}
