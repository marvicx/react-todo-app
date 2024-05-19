import styles from "./todoItem.module.css";
export default function TodoItem({ todo, todos, setTodos }) {
  const handleDelete = (itemName) => {
    console.log(itemName);
    setTodos(todos.filter((todo) => todo.name !== itemName));
  };

  const handleMarkedDone = (itemName) => {
    setTodos(
      todos.map((todo) =>
        todo.name === itemName ? { ...todo, isDone: !todo.isDone } : todo
      )
    ); 
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span
            className={todo.isDone?styles.completed:''}
            onClick={() => handleMarkedDone(todo.name)}
          >
            {todo.name}
          </span>
          <span>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(todo.name)}
            >
              x
            </button>
          </span>
        </div>
      </div>
      <hr className={styles.line} />
    </>
  );
}
