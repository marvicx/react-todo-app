import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ setTodos }) {
  const [todo, setTodo] = useState({name:"", isDone:false});

  const handleSubmit=(e)=>{
    e.preventDefault(); 
    setTodos((previous)=> [...previous, todo]);
    setTodo({name:"", isDone:false});
  }
  return (
    <>
      <div className={styles.card}>
        
        <form className={styles.inputContainer}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Enter todo"
            value={todo.name}
            onChange={(e)=>setTodo({...todo,name:e.target.value})}
          />
          <button type="submit" className={styles.btn_primary} onClick={handleSubmit}>Add</button>
        </form>
      </div> 
    </>
  );
}
