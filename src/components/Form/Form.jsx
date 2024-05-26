import { useState } from "react"

export function Form({setTasksList, setCanAddTask, setCounter, counter }){
  const [userTask, setUserTask] = useState("")
  const [id, setId] = useState(0)
  function handleInput(e){
    setUserTask(prevState => prevState = e.target.value)
    
  }
function handleSubmit(e){
  e.preventDefault()
  const taskText = userTask
  
  setCounter(prevState => ++prevState)
  console.log(counter)
  setTasksList(prevState => [...prevState, {counter, taskText }])
  setUserTask(prevState => prevState ="")
  setCanAddTask(prevState => !prevState)
}


  return <form  onSubmit={(handleSubmit)}>
    <input type="text"
    placeholder="Enter your task"
    onChange={handleInput}
    value={userTask}
    />
    <button>Add task</button>
  </form>
}