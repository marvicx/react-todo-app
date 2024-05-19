import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

import styles from "./todo.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const totalDone = todos.filter((todo)=> todo.isDone === true).length;
  return (
    <>
      <Header /> 
      <div className={styles.container}>
        <Form setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <Footer totalTodos={todos.length} totalDoneTodos={totalDone}/>
    </>
  );
}
