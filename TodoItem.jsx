/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"


import React, { useState } from "react"

export const TodoItem = ({ id, title, deleteTodo, changeColor }) => {
  const [isTitleColored, setIsTitleColored] = useState(false)

  const toggleTitleColor = () => {
    setIsTitleColored(!isTitleColored)
  }

  return (
    <div className="todo-item">
      <h3 style={{ color: isTitleColored ? 'red' : 'inherit' }}>{title}</h3>
      <button className="chngcolor" onClick={toggleTitleColor}></button>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  )
}
