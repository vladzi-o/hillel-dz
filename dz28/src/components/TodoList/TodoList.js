import { useState, useEffect } from "react";
import TodoListItem from "../TodoListItem/TodoListItem.jsx";

function TodoList() {
  const initialList = [
    { id: 1, text: "buy milk", done: true },
    { id: 2, text: "fix lexus", done: false },
    { id: 3, text: "buy parts for lexus", done: false },
  ];
  const [list, setList] = useState(initialList);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    const newId = Math.floor(Math.random() * 100000);
    setList([...list, { id: newId, text: newTodo, done: false }]);
    setNewTodo("");
  };

  const checkTodo = (id) => {
    const newList = list.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setList(newList);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <ul>
        {list.map((todo) => (
          <TodoListItem
            todo={todo}
            handleDone={() => checkTodo(todo.id)}
            handleDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
      <input
        type="text"
        onChange={(event) => setNewTodo(event.target.value)}
        value={newTodo}
      />
      <input type="button" value="+" onClick={addTodo} />
    </div>
  );
}

export default TodoList;
