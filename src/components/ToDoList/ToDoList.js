import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import { useEffect } from "react";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  // useEffect(()=>{
  //   fetch('http://localhost:4100/api/todos')
  //     .then((response)=>{
  //       response.json();
  //   }).then((parseResponse)=>{
  //     console.log("parse response from th fetch method ",parseResponse);
  //   }).catch((err)=>{
  //     console.log("THis is the error where we can find ",err);
  //   })
  // },[]);

  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key ={todo.id || index}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo - TOGGLE Action dispatched");
            dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;