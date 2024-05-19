import styles from "./todoList.module.css";
import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {

    const sortTodos = todos.slice().sort((a,b)=>Number(a.isDone) - Number(b.isDone));
  return (
    <>
      <div className={styles.container}>
        {sortTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.name} todos={todos} setTodos={setTodos}/>
        ))}
      </div>
    </>
  );
}
