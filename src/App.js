import { useState, useEffect } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

import './App.css';

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);
  

function createNewTask(nametk){
  //Validar si nombre de tarea existe en la lista
  if(!taskItems.find(element => element.name === nametk)){
    //Agregar al array de tareas el input en forma de obj
    setTaskItems([...taskItems,{name:nametk,done:false}])
  }
}

function cleanTasks(){
  //Borrar tareas que sean No Done
  setTaskItems(taskItems.filter(task => !task.done));
  setshowCompleted(false);

}

const toggleTask = (task) =>{
  setTaskItems(
    taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
  );
}


//Ejecuta la funcion cuando cargue la pagina
useEffect(()=>{
  //Guardar array en localstorage del navegador
  let data = localStorage.getItem('tasks')
  if(data){
    setTaskItems(JSON.parse(data))
  }
},[])

//Ejecuta la funcion cada vez que cambie el array taskItems
useEffect(()=>{
  //Guardar array en localstorage del navegador
  localStorage.setItem('tasks',JSON.stringify(taskItems))
},[taskItems])

  return (
    <div className="bg-dark vh-100 text-white p-4">
      <Container>
        <TaskCreator createNewTask={createNewTask}/>
        <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
        <VisibilityControl setshowCompleted={(checked) => setshowCompleted(checked)} cleanTasks={cleanTasks} isChecked={showCompleted}/>


        {showCompleted === true && (<TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted = {true}/>)}
      </Container>  
    </div>
  );

}

export default App;
