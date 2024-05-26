import { Task } from "../Task/Task"
export function ToDoList({tasksList, setTasksList}){
  console.log(tasksList)
  
      

    return(
  <ul>
    {tasksList.map(task => <Task key={task.counter} task={task.taskText} id={task.counter} setTasksList={setTasksList}></Task>)}
  </ul>)
}