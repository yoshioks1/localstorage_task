import { useState } from "react";

export const TaskCreator = (props) => {
    const [newTaskName, setnewTaskName] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();//NO page refresh after submitting
      //localStorage.setItem('task',newTaskName);
      props.createNewTask(newTaskName);
      setnewTaskName('')
    }

    return(
        <form onSubmit={handleSubmit} className='my-2 row'>
        <div className='col-9'>
          <input 
            type="text" placeholder="Enter new task" 
            value={newTaskName}
            className='form-control'
            onChange={(e)=> setnewTaskName(e.target.value)}
          />
        </div>
        <div className='col-3'>
          <button className='form-control'>Save Task</button>
        </div>
      </form>
    )
} 