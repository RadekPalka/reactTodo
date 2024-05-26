import { useState } from "react"
import "./Task.css"
export function Task({task, setTasksList, id}){
  
  const [isDone, setIsDone]= useState(false)
  
  const handleDoneButton = () =>{
    setIsDone(prevState => !prevState)

  }
  const handleDeleteButton = () =>{
    
    setTasksList(prevTasks => prevTasks.filter(el => el.counter !== id))
  }
  
  return(
    <li>
      <div className="class-item">
        <span className={isDone ?  "done" : ""}>{task}</span>
        {!isDone && <button onClick={handleDoneButton}>Zrobione</button>}
        <button onClick={handleDeleteButton}>Usuń</button>
      </div>
    </li>
  )
}