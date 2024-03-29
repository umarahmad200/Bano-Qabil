/* eslint-disable react/prop-types */
import { useState } from "react"
import DeleteIcon from "../assets/deleteicon.png"
import CheckIcon from "../assets/checkicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo, checkTodo }) => {
  const [color,setColor]=useState(false);
const handleClick=()=>{
  setColor(!color)
}
  return (
    <div className="todo-item" id="todo-1">
      <p className={color ? "checked":"todo-task-title" }  onClick={handleClick}>{title}</p>
      <div className="icons">
      <img className="check-icon todo-icon" src={CheckIcon} onClick={handleClick}/>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      </div>
    </div>
  )
}
