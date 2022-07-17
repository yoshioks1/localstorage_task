import { useState } from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({tasks,toggleTask,showCompleted = false}) => {

    const taskTableRows = (doneValue) =>{
      return(
        tasks
        .filter(task=>task.done === doneValue)
        .map(task => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))
      )
    }




    return(
        <table className="table table-striped table-bordered table-dark border-secondary p-2">
        <thead>
          <tr className="table-primary">
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
        {taskTableRows(showCompleted)}
        </tbody>
      </table>


    )
} 