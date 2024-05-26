import { useState } from 'react'
import { Form } from './components/Form/Form'
import { ToDoList } from './components/ToDoList/ToDoList'

function App() {
  const [tasksList, setTasksList] = useState([])
  const [canAddTask, setCanAddTask] = useState(false)
  const [counter, setCounter] = useState(0)
  //console.log(tasksList)
  const handleButton = () =>{
    setCanAddTask(prevState => !prevState)
  }

  return (
    <>
              <h1>Do zrobiennia</h1>
              {!canAddTask && <button onClick={handleButton}>+</button>}
              {canAddTask && <Form setTasksList={setTasksList} setCanAddTask={setCanAddTask} setCounter={setCounter} counter={counter}/>}
              <ToDoList tasksList={tasksList} setTasksList={setTasksList}/>

    </>
  )
}

export default App
