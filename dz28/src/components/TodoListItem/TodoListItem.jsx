import "./styles.css";

const TodoListItem = ({ todo, handleDone, handleDelete }) => (
  <li key={todo.id}>
    <span>{todo.text}</span>
    <input type="checkbox" checked={todo.done} onChange={handleDone} />
    <input type="button" value="❌" onClick={handleDelete} />
  </li>
);

export default TodoListItem;
